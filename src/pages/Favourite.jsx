import { AiFillHeart } from "react-icons/ai";
import { useSelector } from 'react-redux'
import ProductCard from '../Components/pageComp/ProductCard'
import Container from '../Components/Container'
import heartBubble from "../img/heart-bubble.svg"

const Favourite = () => {
  const { favouriteProducts } = useSelector(state => state.product)
  return (
    <Container>
      {!(favouriteProducts.length > 0) ?
          <div className="text-center flex items-center flex-col justify-center h-[60vh]">
            <img src={heartBubble} className='w-[150px]' alt="heart-bubble" />
            <h2 className='font-bold text-[25px]'>No favourite Products</h2>
            <span className="flex items-center gap-1">Add with <AiFillHeart className="text-red-500"/>  symbol on product</span>
          </div>
        :
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[15px] py-[40px]'>
          {favouriteProducts.map(item => (
            <ProductCard item={item} key={item.id} />
          ))}
      </div>}
    </Container>
  )
}

export default Favourite