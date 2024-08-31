import React, { useEffect, useRef } from 'react'
import Header from '../Components/Header'
import Content from '../Components/Content'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Components/Footer'
import Container from '../Components/Container'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCategoryData } from '../store/slices/categorySlices'
import { fetchProductData } from '../store/slices/productSlices'

const MainLayout = () => {
    const categoryUrl = 'https://online-shop-db-i7by.onrender.com/categories'
    const productUrl = 'https://online-shop-db-i7by.onrender.com/products'
    const dispatch = useDispatch()
    const mainLayoutScroll = useRef()
    const {pathname} = useLocation()
    useEffect(() => {
        dispatch(fetchCategoryData(categoryUrl))
        dispatch(fetchProductData(productUrl))
        
    }, [])
    useEffect(() => {
        mainLayoutScroll.current.scrollTop = 0
    }, [pathname])

    return (
        <div className='font-poppins'>
            <Header />
            <div ref={mainLayoutScroll} className='min-h-[calc(100vh-70px)] max-h-[calc(100vh-70px)] overflow-y-auto'>
                <Content>
                    <Outlet />
                </Content>
                <Footer />
            </div>
        </div>
    )
}

export default MainLayout