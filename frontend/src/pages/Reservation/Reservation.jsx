import React from 'react'
import './Reservation.css'
import people_dining from "../../assets/people-dining.jpg"


const Reservation = () => {
  return (

    <div className='reservation' id='reservation'>

        <div className="reservation-title">
            <h1>Book a Table</h1>
        </div>


        <div className="reservation-section">
                
            {/* Left Side */}
            <div className="about-left">
                <img src= {people_dining} alt='People dinning' />
                <h2>Book a Table</h2>
            </div>
        
            {/* RIGHT SIDE FORM */}

            <div className="reservation-right">
                <div className="reservation-container">
                    <p className="reservation-subtitle">Reservations</p>
                    <h2>Your Details</h2>
                    <p className="reservation-desc">
                    Fill in the form below and we’ll confirm your booking.
                    </p>



                    {/*-----Reservation form-----*/}

                    <form className="reservation-form">

                        <label>Full Name</label>
                        <input type="text" placeholder="Genny Blessed" />

                        <label>Phone Number</label>
                        <input type="tel" placeholder="+44 7700 900000" />

                        <label>Email Address</label>
                        <input type="email" placeholder="Genny@example.com" />

                        <label>Number of Guests</label>
                        <select>
                            <option>Select party size</option>
                            <option>1 Person</option>
                            <option>2 People</option>
                            <option>3 People</option>
                            <option>4 People</option>
                            <option>5 People</option>
                            <option>6 People</option>
                            <option>7 People</option>
                            <option>8+ People(large party)</option>
                        </select>


                        <div className="reservation-row">
                            <div>
                                <label>Date</label>
                                <input type="date" />
                            </div>

                            <div>
                                <label>Time</label>
                                <input type="time" />
                            </div>
                        </div>


                        <label>Dietary Requirements</label>

                        <div className="checkbox-grid">
                            <label><input type="checkbox" /> Halal</label>
                            <label><input type="checkbox" /> Kosher</label>
                            <label><input type="checkbox" /> Vegan</label>
                            <label><input type="checkbox" /> Dairy Free</label>
                            <label><input type="checkbox" /> No Nuts</label>
                            <label><input type="checkbox" /> Vegetarian</label>
                            <label><input type="checkbox" /> Gluten Free</label>
                        </div>

                        <label>Special Occasion</label>

                        <div className="radio-grid">
                            <label><input type="radio" name="occasion" /> None</label>
                            <label><input type="radio" name="occasion" /> Birthday</label>
                            <label><input type="radio" name="occasion" /> Anniversary</label>
                            <label><input type="radio" name="occasion" /> Other</label>
                        </div>

                        <button className="reserve-btn">Reserve Now</button>

                    </form>
                </div>

            </div>

        </div>

    </div>

  )
}

export default Reservation
