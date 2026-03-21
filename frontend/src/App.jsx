import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Menu from './pages/Menu/Menu'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
// import Header from './pages/Header/Header'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import LoginPopup from './components/LoginPopup/LoginPopup'
// import Footer from './components/Footer/Footer'
import Reservation from './pages/Reservation/Reservation'

import AppDownload from './components/AppDownload/AppDownload'
import Footer from './components/Footer/Footer'



const App = () => {

  const[showLogin,setShowLogin] = useState(false)


  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>} 
    {/*if the show login is true, we will display our login-popup. if false, return the fragment.*/}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />


        {/* <Header/> */}
        {/* <About/> */}
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu />} />
        {/* <Route path='/about' element={<About/>} /> */}
        <Route path='/about' element={<About/>} />
        <Route path='/reservation' element={<Reservation/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/0rder' element={<PlaceOrder/>} />
        <Route path='/contact' element={<Contact/>} />
        </Routes>
      </div>
      {/* <Footer/> */}
       <AppDownload />
      <Footer />
    </>
    
  )
}

export default App



