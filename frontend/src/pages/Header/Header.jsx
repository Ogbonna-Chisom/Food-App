import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import food_hero from "../../assets/food-hero.jpg"
import burger_hero from "../../assets/burger-hero.jpg"
import cheers_hero from "../../assets/cheers-hero.jpg"
import drinks_hero from "../../assets/drinks-hero.jpg"


const Header = () => {
  return (
    <div 
      className="hero"
      style={{ backgroundImage: `url(${food_hero})` }}
    >
      <div className="hero-overlay">
        
        {/* Left Content */}
        <div className="hero-left">
          <h1>Delicious Food, Delivered Fresh</h1>
          <p>
            Experience the best meals crafted with passion and served with love.
          </p>

          <Link to="/menu">
            <button className="hero-btn">View Menu</button>
          </Link>
        </div>

        {/* Right Images */}
        <div className="hero-right">
          
          {/* Image 1 - Menu */}
          <div className="hero-card">
            <img src={burger_hero} alt="Menu" />
            <div className="card-content">
              <Link to="/menu" className="arrow-link"><h3>Explore Our Menu</h3></Link>
              <Link to="/menu" className="arrow-link">→</Link>
            </div>
          </div>

          {/* Image 2 - Reservation */}
          <div className="hero-card">
            <img src={cheers_hero} alt="Reservation" />
            <div className="card-content">
              <Link to="/reservation" className="arrow-link"><h3>Book Reservation</h3></Link>
              <Link to="/reservation" className="arrow-link">→</Link>
            </div>
          </div>

          {/* Image 3 - Special */}
          <div className="hero-card">
            <img src={drinks_hero} alt="Special" />
            <div className="card-content">

               <Link to="/menu" className="arrow-link"><h3>Our Special Mix</h3></Link>

              {/* <h3>Our Special Mix</h3> */}

               <Link to="/menu" className="arrow-link">→</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header