import React from 'react'
import { Routes, Route} from 'react-router-dom'
import HomePage from './pages/Home.jsx'
import ProductsPage from './pages/ProductsPage.jsx'
import Layout from './components/layout/Layout.jsx'
import ProductDetailsPage from './pages/ProductsDetailsPage.jsx'
import CartPage from './pages/CartPage.jsx'

const App = () => {
  return (
    <>
     <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/products' element={<ProductsPage/>}/>
          <Route path='/products/:id' element={<ProductDetailsPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
        </Route>
     </Routes>
    </>
  )
}

export default App
      