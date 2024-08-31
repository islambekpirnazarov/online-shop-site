import React, { useEffect, useState } from 'react'
import Container from '../Components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import ProductCard from '../Components/pageComp/ProductCard'
import { addToCart } from '../store/slices/cartSlice'
import { MdKeyboardArrowRight } from 'react-icons/md'

const DetailsProduct = () => {
  const { slug } = useParams()
  const { products } = useSelector(state => state.product)
  const { categories } = useSelector(state => state.category)
  const selectProduct = products.find(item => `${item.slug}-${item.id}` == slug)
  const selectCategory = categories.find(item => item.id == selectProduct?.categoryId)
  const [activeImage, setActiveImage] = useState(selectProduct?.images[0])
  const relatedProducts = products.filter(item => item.categoryId == selectProduct.categoryId && item.id !== selectProduct.id)

  const dispatch = useDispatch()
  useEffect(() => {
    setActiveImage(selectProduct?.images[0])
  }, [slug])

  const navigate = useNavigate()
  function handleAddToCart(product) {
    dispatch(addToCart(product))
    navigate('/basket')
  }
  return (
    <div>
      <Container>
        <div className='hidden md:flex items-center gap-[10px] font-medium  text-[#6c6c6c] text-[14px] py-[20px]'>
          <span className='capitalize'>Products </span>
          <MdKeyboardArrowRight />
          <span>{selectCategory?.title}</span>
          <MdKeyboardArrowRight />
          <span className='text-black'>{selectProduct?.title}</span>
        </div>
        <div className='flex items-center justify-between gap-[40px] py-[50px] flex-col lg:flex-row'>
          <div className='flex-1 flex items-center gap-[40px] flex-col-reverse sm:flex-row'>
            <div className='sm:h-[300px]  flex flex-wrap sm:flex-nowrap gap-[10px] flex-row sm:flex-col overflow-y-auto scroll-hidden'>
              {selectProduct?.images?.map((item, index) => (
                <div key={index} className={`${activeImage == item ? "border-[1px] border-black" : ""} p-[10px] flex items-center justify-center rounded-md`}>
                  <img onClick={() => setActiveImage(item)} className={` ${activeImage == item ? 'opacity-[1]' : 'opacity-[0.6]'} w-[45px] h-[45px] object-contain cursor-pointer`} src={item} key={index} alt="image" />
                </div>
              ))}
            </div>
            <div>
              <img src={activeImage} className='duration-200 w-[350px] h-[400px] object-contain' alt="" />
            </div>
          </div>
          <div className='flex-1'>
            <h1 className='text-[27px] font-bold'>{selectProduct?.title}</h1>
            <h4 className='text-[24px] font-medium'>{selectProduct?.price}$</h4>
            <p className='py-[15px]'>{selectProduct?.description}</p>
            <button onClick={() => handleAddToCart(selectProduct)} className='px-[30px] py-[12px] text-white bg-black font-medium rounded-md active:scale-95'>
              Add to Card
            </button>
          </div>
        </div>
        <div>
          <div className='text-[20px] font-semibold'>Related Products</div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] py-[40px]'>
            {relatedProducts.map(item => (
              <ProductCard item={item} key={item.id} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}

export default DetailsProduct