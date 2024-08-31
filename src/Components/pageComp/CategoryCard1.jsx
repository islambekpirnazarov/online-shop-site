import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { filteredProductsData } from '../../store/slices/productSlices'

const CategoryCard1 = ({ item }) => {
    const { products } = useSelector(state => state.product)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    function filteredProduct() {
        navigate(`/products`)
        const filteredData = products.filter(productItem => productItem.categoryId == item.id)
        dispatch(filteredProductsData(filteredData))
    }
    return (
        <div onClick={() => filteredProduct()} className=" cursor-pointer flex flex-col items-center justify-center gap-[10px] p-[20px]">
            <div className="p-[20px] flex items-center justify-center rounded-full bg-[#ededed]">
                <img className='min-w-[80px] min-h-[80px] max-h-[80px] max-w-[80px] object-contain' src={item.image} alt={item.title} />
            </div>
            <span className="text-[18px] font-semibold text-nowrap">{item.title}</span>
        </div>
    )
}

export default CategoryCard1