import { AiOutlineClose } from "react-icons/ai";
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '../Components/Container'
import { decreaseQuantity, getTotals, increaseQuantity, removeCartItem } from "../store/slices/cartSlice";
import cartEmptyImg from "../img/basket_no_page.webp"
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const { cartItems, subTotal, total, estimatedTax, estimatedShipping } = useSelector(state => state.cart)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getTotals())
  }, [cartItems])

  return (
    <div>
      <Container>
        {cartItems.length > 0 ? <div className='py-[40px] flex justify-between gap-[25px] flex-col lg:flex-row'>
          <div className='flex-1'>
            <h1 className='text-[25px] font-[500]'>Shopping Cart</h1>
            <div>
              {cartItems.map(item => (
                <div key={item.id} className='flex items-center justify-between gap-[10px] py-[30px] border-b-[1px] border-gray-300'>
                  <img className="w-[70px] h-[70px] object-contain" src={item.images[0]} alt={item.title} />
                  <div className=" flex-[4] font-[500] text-[16px] md:text-[18px]">{item.title} <span className="font-[600] text-[16px] block sm:hidden">{(item.price * item.cartQuantity).toFixed(1)}$</span></div>
                  <div className='flex-1 flex items-center gap-[5px]'>
                    <button onClick={() => dispatch(decreaseQuantity(item.id))} className="cursor-pointer font-bold text-[18px]">-</button>
                    <span className='w-[25px] h-[25px] flex items-center justify-center rounded-md border-[1px] border-gray-[300] font-[600]'>{item.cartQuantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))} className="cursor-pointer font-bold text-[18px]">+</button>
                  </div>
                  <div className='flex-1 text-[16px] md:text-[20px] font-semibold hidden sm:block'>{(item.price * item.cartQuantity).toFixed(1)}$</div>
                  <button onClick={() => dispatch(removeCartItem(item.id))} className="cursor-pointer text-[25px] active:scale-95"><AiOutlineClose /></button>
                </div>
              ))}
            </div>
          </div>
          <div className='flex-1'>

            <div className="border-[1px] border-gray-300 rounded-md p-[20px]">
              <h1 className='text-[22px] font-[700]'>Order Summary</h1>
              <div className="py-[20px] flex flex-col gap-[10px]">
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor="promoCode" className="text-[#545454] font-medium">Discount Code / Promo Code</label>
                  <input type="text" placeholder="Code" id="promoCode" className="p-[12px] border-[1px] outline-none rounded-md focus:border-gray-700" />
                </div>
                <div className="flex flex-col gap-[10px]">
                  <label htmlFor="cardNumber" className="text-[#545454] font-medium">Your bonus card number</label>
                  <div className="relative">
                    <input type="text" placeholder="Enter Card Number" id="cardNumber" className="w-full p-[15px] border-[1px] outline-none rounded-md focus:border-gray-700" />
                    <button className="absolute right-[15px] top-[50%] translate-y-[-50%] px-[25px] py-[7px] bg-transparent border-[2px] border-black rounded-md">Apply</button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-[15px]">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[18px]">Subtotal</h3>
                  <h3 className="font-semibold text-[18px]">{subTotal.toFixed(1)}$</h3>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-[#545454]">Estimated Tax</h3>
                  <h3 className="font-semibold text-[18px]">{estimatedTax}$</h3>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-[#545454]">Estimated shipping & Handling</h3>
                  <h3 className="font-semibold text-[18px]">{estimatedShipping}$</h3>
                </div>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-[18px]">Total</h3>
                  <h3 className="font-semibold text-[18px]">{total}$</h3>
                </div>
                <button className="py-[12px] bg-black text-white rounded-md active:scale-95">Checkout</button>
              </div>
            </div>
          </div>
        </div>
          :
          <div className="flex items-center justify-center flex-col h-[70vh]">
            <img src={cartEmptyImg} alt="Cart Empty" />
            <div className="my-[15px]">There are currently no products in the cart.</div>
            <button onClick={() => navigate('/products')} className="px-[25px] py-[12px] bg-black text-white rounded-md ">Add to cart</button>
          </div>
        }
      </Container>
    </div>
  )
}

export default Basket