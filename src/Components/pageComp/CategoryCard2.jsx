import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filteredProductsData } from '../../store/slices/productSlices'

const CategoryCard2 = ({ item }) => {
  const { products } = useSelector(state => state.product)
  const dispatch = useDispatch()
  const [isActive, setIsActive] = useState(null)
  const categoryCard = useRef()

  function filteredProduct(isActive) {
    setIsActive(isActive)
    const filteredData = products.filter(productItem => productItem.categoryId == item.id)
    dispatch(filteredProductsData(filteredData))

  }
  return (
    <div ref={categoryCard} onClick={() => filteredProduct(item.title)} className={`bg-gray-400 cursor-pointer flex items-center gap-[5px]  px-[20px] py-[5px]`}>
      <div>
        <img className='min-w-[30px] min-h-[30px] max-w-[30px] max-h-[30px] object-contain' src={item.image} />
      </div>
      <div className='text-nowrap'>{item.title}</div>
    </div>
  )
}

export default CategoryCard2