import { useEffect, useState } from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Loading from "../../components/cores/Loading";
import { useContext } from "react";
import { userContext } from "../../supports/context/useUserContext";
import { toast } from 'react-toastify';
import { cartContext } from './../../supports/context/useCartContext';

export default function ProductDetailPage() {
  const params = useParams()
  const [product, setProduct] = useState(null)
  const [selectedSize, setSelectedSize]= useState(null)
  const [quantity, setQuantity] = useState(1)
  const {userData} = useContext(userContext)
  const {setCartData} = useContext(cartContext)

  const onFetchProduct = async() => {
    try {
      const res = await axios.get(`http://localhost:5000/products/${params?.productId}`)
      setProduct(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const onHandleAddToCart = async() => {
    try {
      if(selectedSize === null) throw new Error('Select Size First!')
      
      const checkProductExist = await axios.get(`http://localhost:5000/carts?productId=${product.id}&userId=${userData.id}&size=${selectedSize.size}`)
      if(checkProductExist.data.length === 0){
        console.log('???')
        await axios.post('http://localhost:5000/carts', {
          userId: userData.id, 
          productId: product.id,
          quantity,
          size: selectedSize.size
        })
      }else{
        const currentQuantity = checkProductExist.data[0].quantity 
        const newQuantity = currentQuantity + quantity
        
        if(newQuantity > selectedSize.stock) return toast.error('Out of Stock')
        
        await axios.patch(`http://localhost:5000/carts/${checkProductExist.data[0].id}`, {
          quantity: newQuantity
        })
      }

      const findCartUser = await axios.get(`http://localhost:5000/carts?userId=${userData.id}`)
      setCartData(findCartUser.data.length)
      toast.success('Add to Cart Success!')
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    onFetchProduct()
  }, [])

  if(product === null) return <Loading />

  return (
    <>
      <div className="px-32">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <img
              src={product.imageFront}
              alt=""
            />
          </div>
          <div className="py-2 font-sans tracking-wide  w-[400px]">
            <p className="text-xl font-bold pb-5">
              {product?.name}
            </p>
            <p className="text-xl font-bold">Rp {product.price}</p>
            <div className="flex justify-between">
              <p className="text-red-500 font-bold">
                {product.stock}
                {selectedSize === null?
                  null
                  :
                  <>Size {selectedSize.size}: Stock {selectedSize.stock}</>
                } 
              </p>
              <div className="flex gap-3 items-center">
                <button onClick={() => setQuantity(quantity - 1)} disabled={quantity === 1? true : false} className="bg-black text-white border border-black w-[35px] h-[35px] rounded-none font-bold flex items-center justify-center">
                  -
                </button>
                <p className="font-bold text-xl">
                  {quantity}
                </p>
                <button onClick={() => setQuantity(quantity + 1)} disabled={selectedSize?.stock === quantity? true : false} className="bg-black text-white border border-black w-[35px] h-[35px] rounded-none font-bold flex items-center justify-center">
                  + 
                </button>
              </div>
            </div>
            <p>
              Used - Excellent -{" "}
              <span>
                <u>Wild Fable</u>
              </span>
            </p>
            {
              product?.sizes?.length?
                <div className="dropdown w-full">
                  <div tabIndex={0} role="button" className="btn rounded-sm border border-black m-1 w-full">{selectedSize?.size? selectedSize?.size : 'Select Your Size'}</div>
                  <ul tabIndex={0} className="dropdown-content z-[1] p-2 w-full shadow bg-base-100 rounded-sm w-52">
                      {
                        product?.sizes?.map((size, index) => {
                          return(
                              <li
                                onClick={() => setSelectedSize(size)} // {size: ..., stock: ...}
                                className="hover:bg-gray-100 hover:rounded-sm px-2 py-2"
                              >
                                {size.size}
                              </li>
                          )
                        })
                      }
                  </ul>
                </div>
              :
                null
            }
            <div className="flex flex-col gap-2 items-center ml-1 mt-1 w-full">
              <button onClick={onHandleAddToCart} className="btn w-full rounded-none bg-black text-white border-2 border-black hover:bg-red-500 hover:border-red-500 text-[15px] tracking-wide">
                Add to Bag
              </button>
            </div>
            <div className="flex pt-10 gap-5 items-center">
              <MdOutlineVerifiedUser size={30} />{" "}
              <span className="text-xs">
                All purchases through Depop are covered by Buyer Protection.
                <span>
                  <u>Learn more</u>
                </span>
              </span>
            </div>
            <div className="divider"></div>
            <h1>Medium Green Long Sleeve Shirt - Wild Fable</h1>
          </div>
        </div>
      </div>
    </>
  );
}
