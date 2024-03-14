import { LiaSortSolid } from "react-icons/lia";
import axios from 'axios';
import { useEffect, useState } from "react";
import CardProducts from "../../components/card-products";
import { Link } from 'react-router-dom';
import Bebas from "../../components/Bebas";

export default function HomePage(){

    const [products, setProducts] = useState(null)

    const onFetchProducts = async() => {
        try {
            const res = await axios.get('http://localhost:5000/products')
            setProducts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        onFetchProducts()
    }, [])

    if(products === null) return <h1>Loading...</h1>

    return(
        <div className='px-32'>
            {/* Section: Headers */}
            <div
                className="flex justify-between"
            >
                <div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn rounded-sm border border-black m-1">Category</div>
                        <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-sm w-52">
                            <li
                                className="hover:bg-gray-100 hover:rounded-sm px-2 py-2"
                            ><a>Kaos</a></li>
                            <li
                                className="hover:bg-gray-100 hover:rounded-sm px-2 py-2"
                            ><a>Celana</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn rounded-sm border border-black m-1">Price</div>
                        <div tabIndex={0} className="flex flex-col gap-3 dropdown-content z-[1] p-2 shadow bg-base-100 rounded-sm">
                            <div className="flex items-center gap-10 ">
                                <input type="text" placeholder="Minimum" className="input rounded-none border border-black" />
                                -
                                <input type="text" placeholder="Maximum" className="input rounded-none border border-black" />
                            </div>
                            <button
                                className="btn bg-black text-white w-full rounded-none"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn rounded-sm border border-black m-1">Sort <LiaSortSolid /></div>
                        <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow bg-base-100 rounded-sm w-52">
                            <li
                                className="hover:bg-gray-100 hover:rounded-sm px-2 py-2"
                            ><a>Price</a></li>
                            <li
                                className="hover:bg-gray-100 hover:rounded-sm px-2 py-2"
                            ><a>Name</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Section: Product List */}
            <div
                className="grid grid-cols-12 gap-10 py-10 px-1"
            >
                {
                    products.map((product, index) => {
                        return(
                            <div key={index} className="col-span-3">
                                <Link to={`/product-detail/${product.id}`}>
                                    <CardProducts 
                                        key={index}
                                        image={product.imageFront}
                                        price={product.price}
                                        brand={product.brand}
                                        size={product.sizes}
                                    />
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}