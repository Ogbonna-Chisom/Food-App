import React from 'react'
import './About.css'
import inner_restaurant from "../../assets/inner-restaurant.jpg"
import star_rating11 from "../../assets/star-rating11.png"


const About = () => {
  return (
    <div className="about" id='about'>

      <div className="about-title">
        <h1>About Us</h1>
      </div>

      <div className="about-section">
        
        {/* Left Side */}
        <div className="about-left">
          <img src= {inner_restaurant} alt='delicios food' />
        </div>

        {/* Right Side */}
        <div className="about-right">
          <h2>Our Story</h2>
          <p>
            Founded with a passion for culinary excellence, Food Base was created to offer more than just a meal, but an experience. 
            Our chefs blend traditional techniques with modern creativity, crafting each dish with precision and care.
            From the freshest ingredients to the final presentation, every detail reflects our commitment to quality, flavor, and unforgettable dining moments.
            At Food Base, we believe great food brings people together. 
            What started as a small kitchen experiment has grown into a 
            fast-growing food delivery experience serving hundreds of happy customers daily.
          </p>

          <p>
            We partner with top restaurants and talented chefs to bring 
            you fresh, tasty meals delivered straight to your doorstep — 
            fast, hot, and hassle-free.
          </p>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="about-under">

        <div>
          <h2>TripAdvisor</h2>
          <img src= {star_rating11} alt='5-star'/>
        </div>

        <div>
          <h2>Google Reviews</h2>
          <img src= {star_rating11} alt='5-star'/>
        </div>

        <div>
          <h2>Trust Pilot</h2>
          <img src= {star_rating11} alt='5-star'/>
        </div>

      </div>
      

    </div>
    
  )
}

export default About