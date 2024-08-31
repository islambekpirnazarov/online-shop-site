import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { favouriteProductsData } from "../../store/slices/productSlices";

const ProductCard = ({ item }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { favouriteProducts } = useSelector(state => state.product)
    return (

        <div className='relative rounded-md bg-[#f7f7f7] p-[25px] flex flex-col justify-between items-center text-center gap-[10px]'>
            <div className='flex items-center justify-center'><img src={item.images[0]} alt={item.title} className='h-[200px] w-[full] object-cover' /></div>
            <h4 className='text-[18px] font-medium'>{item.title}</h4>
            <h3 className='text-[22px] font-semibold'>{item.price}$</h3>
            <div>
                <button onClick={() => navigate(`/details/${item.slug}-${item.id}`)} className='px-[35px] py-[12px] font-meduim bg-black text-white rounded-md'>Buy Now</button>
            </div>
            <span onClick={() => dispatch(favouriteProductsData(item))} className="absolute top-[15px] right-[10px] text-[27px] text-gray-500 cursor-pointer">
                {favouriteProducts.find(favouriteItem => favouriteItem.id === item.id) ? <span className="text-red-500"><AiFillHeart /></span> : <AiOutlineHeart />}
            </span>
        </div>

    )
}

export default ProductCard