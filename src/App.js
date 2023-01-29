import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SiteHeader from './pages/layout/SiteHeader'
import SiteFooter from './pages/layout/SiteFooter'
import ProductList from './pages/product/ProductList'
import Cart from './pages/product/Cart'
import Home from './pages/Home'


function App() {
  return (<>
  <SiteHeader/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/products' element={<ProductList/>}></Route>
        <Route  path='/cart' element={<Cart/>}></Route>
        </Routes>
    <SiteFooter/>
  </>
  )
}

export default App


