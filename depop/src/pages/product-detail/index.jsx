import { useEffect, useState } from "react";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetailPage() {
  const params = useParams()
  const [product, setProduct] = useState({})
 
  const onFetchProduct = async() => {
    try {
      const res = await axios.get(`http://localhost:5000/products/${params.productId}`)
      setProduct(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    onFetchProduct()
  }, [])

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
              {product.name}
            </p>
            <p className="text-xl font-bold">Rp {product.price}</p>
            <p className="py-5">
              Size L - Used - Excellent -{" "}
              <span>
                <u>Wild Fable</u>
              </span>
            </p>
            <div className="flex flex-col gap-2 items-center">
              <button className="btn w-full rounded-none bg-black text-white border-2 border-black hover:bg-red-500 hover:border-red-500 text-[15px] tracking-wide">
                Buy Now
              </button>
              <button className="btn w-full bg-white rounded-none border-2 border-black ext-[15px] tracking-wide hover:border-black">
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
