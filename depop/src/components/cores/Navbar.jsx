import { CiSearch, CiHeart, CiMenuBurger  } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { userContext } from "../../supports/context/useUserContext";
import { Link } from "react-router-dom";
import axios from 'axios';
import { cartContext } from './../../supports/context/useCartContext';

export default function Navbar(){
    const route = useLocation()
    const {userData, setUserData} = useContext(userContext)
    const {cartData, setCartData} = useContext(cartContext)
    
    const handleKeepNotifCart = async() => {
        try {
            let usersData = localStorage.getItem('dataUser')
            usersData = JSON.parse(usersData)
            const findCartUser = await axios.get(`http://localhost:5000/carts?userId=${usersData.id}`)
            setCartData(findCartUser.data.length)
        } catch (error) {
            console.log(error)
        }
    }

    const handleKeepLogin = async() => {
        try {
            let usersData = localStorage.getItem('dataUser')
            usersData = JSON.parse(usersData)

            const res = await axios.get(`http://localhost:5000/users/${usersData.id}`)
            setUserData({
                id: res.data.id,
                username: res.data.username
            })
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        handleKeepLogin()
        handleKeepNotifCart()
    }, [])
    
    return(
        <div className="fixed w-full bg-white z-10">
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
                    <Link to='/'>
                        <img
                            src="/DepopLogo.svg" 
                            width={100}
                            height={70}
                        />
                    </Link>
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
                <div className="hover:text-gray-500 relative">
                    <IoBagOutline 
                        size={30}
                    />
                    <div className="absolute top-0 right-0 mr-[-10px] bg-red-500 text-white rounded-full px-2">
                    {cartData}
                    </div>
                </div>
                <button className="btn rounded-none bg-black text-white hover:bg-gray-500 hidden lg:block">
                        Sell Now
                </button>
                {
                    userData !== null?
                        userData?.username
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