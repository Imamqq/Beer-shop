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
// import { fetchBeers, getBeers } from './redux/Slices/ApiSlice'

function App() {

  // let [beers, setBeers] = useState([])

  // beers = useSelector(getBeers)


  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch(fetchBeers())
  //   setBeers(beers)
  // }, [dispatch])


  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/beerInfo/:id' element={<BeerInfo />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
