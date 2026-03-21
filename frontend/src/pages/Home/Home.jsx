import React from 'react'
import './Home.css'
import Header from '../Header/Header'
import About from '../About/About'
import Contact from '../Contact/Contact'
import Announcement from '../Announcement/Announcement'



const Home = () => {
  return (
    <div>
      <Header />
      <Announcement/>
      <About />
      <Announcement/>
      <Contact />
    </div>
  )
}

export default Home
