import React from 'react'
import './Footer.css'
import twitter_icon from "../../assets/twitter-icon.png"
import whatsapp_icon from "../../assets/whatsapp-icon.png"
import instagram_icon from "../../assets/instagram-icon.png"
import facebook_icon from "../../assets/facebook-icon.png"
import { Link } from 'react-router-dom'


const Footer = () => {
  return (

     <footer>
    <div className='footer'>
        <div className="footer-content">
            <div className="footer-content-left">


                {/* <h1>FoodBase</h1> */}

                {/* <Link to="/"><h1>FoodBase</h1></Link>  */}
                <h1
                    style={{ cursor: "pointer" }}
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    >
                    FoodBase
                </h1>
                


                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat ut nulla, laborum, dolor explicabo quod, officiis nemo consequatur atque repudiandae quidem? Eos ex provident magnam nisi architecto voluptate vero! Dicta.</p>
                <div className="footer-social-icons">
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <img src={twitter_icon} alt="twitter icon" />
                    </a>

                    <a href="https://wa.me/" target="_blank" rel="noopener noreferrer">
                    <img src={whatsapp_icon} alt="whatsapp icon" />
                    </a>

                    <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img src={instagram_icon} alt="instagram icon" />
                    </a>

                    <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img src={facebook_icon} alt="facebook icon" />
                    </a>

                </div>
            </div>

            {/*-----Center Content-----*/}
            {/* <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div> */}


            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/cart">Delivery</Link></li>
                    <li><Link to="/privacy">Privacy Policy</Link></li>
                </ul>
            </div>


            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+1 (555) 123-4567</li>
                    <li>foodbase@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copywrite 2026 @ Foodbase.com - All rights reserved.</p>
    </div>

    </footer>

  )
}

export default Footer
