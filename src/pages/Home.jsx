
import { RiArrowRightSLine } from "react-icons/ri";
import { RiArrowLeftSLine } from "react-icons/ri";
import React, { useRef } from 'react'
import Container from '../Components/Container'
import iphoneImg from "../img/iphone-image.png"
import { useSelector } from "react-redux";
import CategoryCard from "../Components/pageComp/categoryCard";
import ProductCard from "../Components/pageComp/ProductCard";
import { Link } from "react-router-dom";
const Home = () => {
    const { categories, isCategoryLoad } = useSelector(state => state.category)
    const { products, isProductLoad, isProductError } = useSelector(state => state.product)
    const selectProducts = products.slice(-8)
    const categoryCard = useRef()
    function leftButton() {
        categoryCard.current.scrollTo({
            left: categoryCard.current.scrollLeft - 200,
            behavior: 'smooth'
        })
    }
    function rightButton() {
        categoryCard.current.scrollTo({
            left: categoryCard.current.scrollLeft + 200,
            behavior: 'smooth'
        })
    }
    return (
        <>
            <div className='bg-black text-white h-[100vh] md:max-h-[calc(100vh-70px)] overflow-y-hidden'>
                <Container>
                    <div className='flex justify-between py-[50px] flex-col md:flex-row gap-[25px]'>
                        <div className='flex-1 lg:mt-[150px] flex flex-col gap-[15px]'>
                            <h3 className='text-[rgb(255,255,255)] opacity-[0.4] text-[25px] font-[600]'>Pro.Beyond.</h3>
                            <h1 className='text-[50px] sm:text-[60px] md:text-[70px] lg:text-[80px] font-[200]'>IPhone 14 <span className='font-[400]'>Pro</span></h1>
                            <p className='text-[rgb(145,145,145)]'>Created to change everything for the better. For everyone</p>
                            <div>
                                <Link to={'/products'}>
                                    <button className='border-[2px] border-white outline-none bg-transparent py-[12px] px-[35px] rounded-md active:scale-95'>Shop Now</button>
                                </Link>
                            </div>
                        </div>
                        <div className='flex-1 flex justify-center'>
                            <img src={iphoneImg} className='' />
                        </div>
                    </div>
                </Container>
            </div>
            <div className='py-[40px] bg-[#fafafa]'>
                <Container>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-[25px] font-[500]'>Browse By Category</h3>
                        <div className="flex items-center gap-[10px] text-[35px]">
                            <span className="cursor-pointer" onClick={() => leftButton()}><RiArrowLeftSLine /></span>
                            <span className="cursor-pointer" onClick={() => rightButton()}><RiArrowRightSLine /></span>
                        </div>
                    </div>
                    <div ref={categoryCard} className=" flex items-center gap-[35px] my-[20px] overflow-x-auto scroll-hidden">
                        {isCategoryLoad ? [1, 2, 3, 4, 5].map(item => (
                            <div key={item} className="w-[150px] h-[150px] rounded-full animate-pulse bg-gray-200 flex items-center justify-center flex-col gap-[10px]">
                                <div className="w-[50%] h-[60px] bg-gray-300 rounded-md"></div>
                                <div className="w-[70%] h-[25px] bg-gray-300 rounded-md"></div>
                            </div>
                        ))
                            : categories.map(item => (
                                <CategoryCard item={item} key={item.id} loading={isCategoryLoad} />
                            ))}
                    </div>
                </Container>
            </div>
            <div className="py-[40px]">
                <Container>
                    <div className="font-[600] text-[18px] mb-[15px]">New Arrivals</div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px]">

                        {isProductLoad ? [1, 2, 3, 4].map(item => (
                            <div key={item} className='animate-pulse rounded-md bg-[#f7f7f7] p-[25px] flex flex-col justify-between items-center text-center gap-[10px]'>
                                <div className='flex items-center justify-center w-[95%] h-[250px] bg-gray-200 rounded-md'></div>
                                <h4 className=' w-[95%] h-[20px] bg-gray-200 rounded-sm'></h4>
                                <h3 className=' w-[95%] h-[25px] bg-gray-200 rounded-sm'></h3>
                                <div className="bg-gray-200 w-[95%] h-[40px] rounded-md">
                                </div>
                            </div>))
                            : selectProducts.map(item => (
                                <ProductCard item={item} loading={isProductLoad} key={item.id} />
                            ))}

                    </div>
                </Container>
            </div>
        </>
    )
}

export default Home