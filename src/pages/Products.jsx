import { MdKeyboardArrowRight } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from '../Components/pageComp/ProductCard'
import Container from '../Components/Container'

import CategoryCard2 from '../Components/pageComp/CategoryCard2'
import { filteredProductsData } from '../store/slices/productSlices'
import { useLocation } from 'react-router-dom'



const Products = () => {
    const { pathname } = useLocation()
    const { filteredProducts, products, isProductLoad } = useSelector(state => state.product)
    const { categories, isCategoryLoad } = useSelector(state => state.category)
    const dispatch = useDispatch()
    const filteredCategory = categories.find(item => item?.id == filteredProducts[0]?.categoryId)
    return (
        <div>
            <div className=' bg-black py-[10px] flex w-full items-center px-[20px] scroll-hidden gap-[20px] overflow-y-auto'>
                <div onClick={() => dispatch(filteredProductsData([]))} className='cursor-pointer bg-gray-400 px-[20px] py-[8px]'>
                    <div className='text-nowrap'>{isCategoryLoad ? "Loading" : "All Products"}</div>
                </div>
                {isCategoryLoad ? [1, 2, 3, 4, 5, 6, 7].map(item => (
                    <div key={item} className='w-[200px] h-[40px] bg-gray-300 animate-pulse'>

                    </div>
                ))
                    : categories.map(item => (
                        <CategoryCard2 item={item} key={item.id} />
                    ))}
            </div>
            <Container>
                <div className='hidden md:flex items-center gap-[10px] font-medium  text-[#6c6c6c] text-[14px] py-[20px]'>
                    <span className='capitalize'>{pathname.slice(1)} </span>
                    <MdKeyboardArrowRight />
                    {filteredProducts.length > 0 ? filteredCategory?.title : "All Products"}<span className='text-black'></span>
                </div>
                <div className='font-medium  text-[#6c6c6c] text-[20px] mt-[10px]'>
                    Selected Products: <span className='text-black font-bold'>{isProductLoad ? 0 : filteredProducts.length > 0 ? filteredProducts.length : products.length}</span>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] py-[40px]'>
                    {isProductLoad ? [1, 2, 3, 4].map(item => (
                        <div key={item} className='animate-pulse rounded-md bg-[#f7f7f7] p-[25px] flex flex-col justify-between items-center text-center gap-[10px]'>
                            <div className='flex items-center justify-center w-[95%] h-[250px] bg-gray-200 rounded-md'></div>
                            <h4 className=' w-[95%] h-[20px] bg-gray-200 rounded-sm'></h4>
                            <h3 className=' w-[95%] h-[25px] bg-gray-200 rounded-sm'></h3>
                            <div className="bg-gray-200 w-[95%] h-[40px] rounded-md">
                            </div>
                        </div>
                    )) : filteredProducts.length > 0 ?
                        filteredProducts.map(item => (
                            <ProductCard item={item} loading={isProductLoad} key={item.id} />
                        ))
                        :
                        products.map(item => (
                            <ProductCard item={item} loading={isProductLoad} key={item.id} />
                        ))
                    }
                </div>
            </Container>
        </div>
    )
}

export default Products