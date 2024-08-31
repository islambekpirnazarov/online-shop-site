import { AiFillInstagram } from "react-icons/ai";
import { BsTiktok } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { BsTwitter } from "react-icons/bs";
import React from 'react'
import Container from './Container'
import logo from "../img/footer-logo.png"
const Footer = () => {
    return (
        <div className='bg-black'>
            <Container>
                <div className='py-[50px]'>
                    <div className='flex justify-between'>
                        <div className='flex-1'>
                            <img src={logo} alt="footer-logo" />
                            <p className='text-[rgb(207,207,207)] mt-[20px]'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
                        </div>
                        <div className='flex-1 hidden  sm:flex flex-col items-center'>
                            <h3 className='text-white font-semibold text-[18px] mb-[15px]'>Services</h3>
                            <ul>
                                <li className='text-[rgb(207,207,207)] text-[14px] mb-[10px] cursor-pointer hover:text-white'>Bonus program</li>
                                <li className='text-[rgb(207,207,207)] text-[14px] mb-[10px] cursor-pointer hover:text-white'>Gift cards</li>
                                <li className='text-[rgb(207,207,207)] text-[14px] mb-[10px] cursor-pointer hover:text-white'>Credit and payment</li>
                                <li className='text-[rgb(207,207,207)] text-[14px] mb-[10px] cursor-pointer hover:text-white'>Service contracts</li>
                                <li className='text-[rgb(207,207,207)] text-[14px] mb-[10px] cursor-pointer hover:text-white'>Non-cash account</li>
                                <li className='text-[rgb(207,207,207)] text-[14px] mb-[10px] cursor-pointer hover:text-white'>Payment</li>
                            </ul>
                        </div>
                        <div className='flex-1 hidden md:block'>
                            <h3 className='text-white font-semibold text-[18px] mb-[15px]'>Assistance to the buyer</h3>
                            <ul>
                                <li className='text-[rgb(207,207,207)] text-[14px] mb-[10px] cursor-pointer hover:text-white'>Find an order</li>
                                <li className='text-[rgb(207,207,207)] text-[14px] mb-[10px] cursor-pointer hover:text-white'>Terms of delivery</li>
                                <li className='text-[rgb(207,207,207)] text-[14px] mb-[10px] cursor-pointer hover:text-white'>Exchange and return of goods</li>
                                <li className='text-[rgb(207,207,207)] text-[14px] mb-[10px] cursor-pointer hover:text-white'>Guarantee</li>
                                <li className='text-[rgb(207,207,207)] text-[14px] mb-[10px] cursor-pointer hover:text-white'>Frequently asked questions</li>
                                <li className='text-[rgb(207,207,207)] text-[14px] mb-[10px] cursor-pointer hover:text-white'>Terms of use of the site</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-white flex items-center gap-4 text-[20px] mt-[15px]">
                        <span className="cursor-pointer hover:text-gray-300">
                            <BsTwitter />
                        </span>
                        <span className="cursor-pointer hover:text-gray-300">
                            <CgFacebook />
                        </span>
                        <span className="cursor-pointer hover:text-gray-300"><BsTiktok /></span>
                        <span className="cursor-pointer hover:text-gray-300"><AiFillInstagram /></span>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Footer