import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from './Layouts/MainLayout'
import Home from './pages/Home'
import Basket from './pages/Basket'
import Favourite from './pages/Favourite'
import DetailsProduct from './pages/DetailsProduct'
import Products from './pages/Products'

const App = () => {
  const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/favourite' element={<Favourite/>}/>
      <Route path='/details/:slug' element={<DetailsProduct/>}/>
    </Route>
  ))
  return (
    <RouterProvider router={route}/>
  )
}

export default App