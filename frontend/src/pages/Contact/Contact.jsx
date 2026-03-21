import React from 'react'
import './Contact.css'
import restaurant_img from "../../assets/restaurant-img.jpg"

const Contact = () => {
    return (
        <div className="contact" id='contact'>
            <div className="contact-title">
                <h1>Get In Touch</h1>
            </div>

            <div className="contact-section">

                {/*-----Left Side-----*/}
                <div className="contact-left">

                    {/*-----Cards Row-----*/}
                    <div className="contact-cards">

                        <div className="contact-card">
                            <h3>Opening Hours</h3>
                            <p>Mon-Friday 15:00 - 00:00</p>
                            <hr />
                            <p>Sat-Sun 12:00 - 22:00</p>
                        </div>

                        <div className="contact-card">
                            <h3>Contact Info</h3>
                            <p><span>Address:</span> 123 Main Street, New York, NY 10001</p>
                            <p><span>Email:</span> foodbase@gmail.com</p>
                            <p><span>Website:</span> www.foodbase.com</p>
                            <p><span>Contact Number:</span> +1 (555) 123-4567</p>
                        </div>

                    </div>

                    {/*-----Google Map-----*/}
                    <div className="contact-map">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18..."
                            width="100%"
                            height="250"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Google Map"
                        ></iframe>
                    </div>

                </div>

                {/*-----Right Side-----*/}
                <div className="contact-right">
                    <img src={restaurant_img} alt="delicious food" />
                </div>

            </div>
        </div>
    )
}

export default Contact