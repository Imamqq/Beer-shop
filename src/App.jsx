import { Route, Routes } from 'react-router-dom'
// import { useEffect, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'

import './App.scss'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Shop from './components/Shop/Shop'
import BeerInfo from './components/BeerInfo/BeerInfo'
import NotMade from './components/NotMade/NotMade'
import NotFound from './components/NotFound/NotFound'

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/beerInfo/:id' element={<BeerInfo />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/notmade' element={<NotMade />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
