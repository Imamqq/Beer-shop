import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.scss'

import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Cart from './components/Cart/Cart'
import Shop from './components/Shop/Shop'
import BeerCard from './components/BeerCard/BeerCard'

function App() {

  const [beers, setBeers] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5173/db.json").then(({ data }) => {
      setBeers(data.beers)
    })
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop items={beers} />} />
        <Route path='/beerCard/:id' element={<BeerCard />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
