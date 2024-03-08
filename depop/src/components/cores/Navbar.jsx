import { CiSearch, CiHeart, CiMenuBurger  } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { userContext } from "../../supports/context/useUserContext";

export default function Navbar(){
    const route = useLocation()
    const {userData} = useContext(userContext)
    console.log('This is Navbar')
    console.log(userData)
    
    return(
        <div className="fixed w-full bg-white">
            <div className="flex items-center bg-base-100 px-10 py-2">
                {/* Div Left */}
                <div className="flex-1 flex items-center gap-3">
                    {/* 
                        Icon ini akan muncul di ukuran medium keatas, 
                        dan akan ke hide di ukuran medium kebawah
                    */}
                    <CiMenuBurger 
                        className="block lg:hidden"
                        size={30}
                    />
                    <img
                        src="/DepopLogo.svg" 
                        width={100}
                        height={70}
                    />
                </div>
                {/* Div Center */}
                <div className={`flex-1 hidden lg:${route.pathname === '/login'? 'hidden' : 'block'}`}>
                    <div className="flex items-center gap-2 border px-3 py-3 rounded-md">
                        <CiSearch />
                        <input type="text" placeholder="Search" className="focus:outline-none lg:w-auto max-w-fit" />
                    </div>
                </div>
                {/* Div Right */}
                <div className="flex-1 gap-2 flex justify-end items-center">
                <div className="hover:text-gray-500">
                    <CiHeart 
                        size={30}
                        className="hover:text-gray-500"
                    />
                </div>
                <div className="hover:text-gray-500">
                    <IoBagOutline 
                        size={30}
                    />
                </div>
                <button className="btn rounded-none bg-black text-white hover:bg-gray-500 hidden lg:block">
                        Sell Now
                </button>
                {
                    userData !== null?
                        userData
                    :
                        <>
                            <button className="btn rounded-none bg-black text-white hover:bg-gray-500 lg:bg-white lg:text-black border border-black hover:border-black">
                                    Sign Up
                            </button>
                            <button className="rounded-none bg-white text-black text-lg font-bold hover:text-gray-500 hidden lg:block">
                                    Login
                            </button>
                        </>
                }
                </div>
            </div>
            <div className="divider"></div>
            <div className={`flex gap-4 px-10 py-2 bg-base ${route.pathname === '/login'? 'hidden' : 'block'}`}>
                <button className="rounded-none bg-white text-black text-lg font-bold hover:text-gray-500">
                    Menswear 
                </button>
                <button className="rounded-none bg-white text-black text-lg font-bold hover:text-gray-500">
                    Womenswear 
                </button>
                <button className="rounded-none bg-white text-black text-lg font-bold hover:text-gray-500">
                    Brands
                </button>
            </div>
        </div>
    )
}