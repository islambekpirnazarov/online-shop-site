import { AiOutlineClose } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import React from 'react'
import logo from "../img/logo.png"
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../store/slices/pageActionSlice";

const Header = () => {
    const { pathname } = useLocation()
    const { favouriteProducts } = useSelector(state => state.product)
    const { cartItems } = useSelector(state => state.cart)
    const { showMenu } = useSelector(state => state.pageAction)
    const dispatch = useDispatch()
    return (
        <Container>
            <div className="h-[70px] bg-white flex items-center justify-between">
                <div>
                    <Link to={"/"}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className='relative  overflow-hidden hidden md:block'>
                    <input type="text" placeholder='Search' className="bg-gray-100 min-w-[400px] w-full px-[35px] py-[10px] rounded-md outline-none font-semibold placeholder:text-[14px]" />
                    <span className='absolute left-[10px] text-[20px] top-[50%] translate-y-[-50%]'>
                        <CiSearch />
                    </span>
                </div>

                <nav className="hidden sm:block">
                    <ul className="flex items-center gap-[25px] text-nowrap">
                        <Link to={"/"}>
                            <li className={`opacity-[0.3] ${pathname == "/" && "opacity-[1]"}`}>Home</li>
                        </Link>
                        <Link to={'/products'}>
                            <li className={`opacity-[0.3] ${pathname == '/products' && "opacity-[1]"}`}>Products</li>
                        </Link>
                        <li className="opacity-[0.3]">Contact Us</li>
                        <Link to={"/favourite"}>
                            <li className="relative">
                                <span className="text-[25px]"><AiOutlineHeart /></span>
                                <span className="absolute top-[-12px] right-[-10px] font-bold bg-gray-400 w-[20px] h-[20px] rounded-full flex items-center justify-center">{favouriteProducts.length}</span>
                            </li>
                        </Link>
                        <Link to={"/basket"}>
                            <li className="relative">
                                <span className="text-[25px]"><BsCart3 /></span>
                                <span className="absolute top-[-12px] right-[-10px] font-bold bg-gray-400 w-[20px] h-[20px] rounded-full flex items-center justify-center">{cartItems.length}</span>
                            </li>
                        </Link>
                    </ul>
                </nav>

                {<ul className={`fixed top-[70px] ${showMenu ? 'right-0' : 'right-[-300px]'} flex flex-col bg-white z-10 w-[300px] duration-300 h-full items-center gap-[25px] text-nowrap`}>
                    <Link onClick={() => dispatch(toggleMenu())} to={"/"}>
                        <li className={`opacity-[0.3] ${pathname == "/" && "opacity-[1]"}`}>Home</li>
                    </Link>
                    <Link onClick={() => dispatch(toggleMenu())} to={'/products'}>
                        <li className={`opacity-[0.3] ${pathname == '/products' && "opacity-[1]"}`}>Products</li>
                    </Link>
                    <li className="opacity-[0.3]">Contact Us</li>
                    <Link onClick={() => dispatch(toggleMenu())} to={"/favourite"}>
                        <li className="relative">
                            <span className="text-[25px]"><AiOutlineHeart /></span>
                            <span className="absolute top-[-12px] right-[-10px] font-bold bg-gray-400 w-[20px] h-[20px] rounded-full flex items-center justify-center">{favouriteProducts.length}</span>
                        </li>
                    </Link>
                    <Link onClick={() => dispatch(toggleMenu())} to={"/basket"}>
                        <li className="relative">
                            <span className="text-[25px]"><BsCart3 /></span>
                            <span className="absolute top-[-12px] right-[-10px] font-bold bg-gray-400 w-[20px] h-[20px] rounded-full flex items-center justify-center">{cartItems.length}</span>
                        </li>
                    </Link>
                </ul>}
                <div onClick={() => dispatch(toggleMenu())} className="text-[22px] cursor-pointer block sm:hidden">
                    {showMenu ? <AiOutlineClose /> : <RxHamburgerMenu />}
                </div>
            </div>
        </Container>
    )
}

export default Header