import './Menu.css'
// import { asset } from '../../assets/asset'
import { menu_list } from '../../assets/asset'
// import { useState } from 'react'
import React, { useState, useContext } from 'react'

import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'








const Menu = () => {
    const [category, setCategory] = useState("All");

    // Filter menu based on category
    const filteredMenu =
    category === "All"
    ? menu_list
    : menu_list.filter((item) => item.category === category);



    const { addToCart, removeFromCart, cartItems } = useContext(CartContext);
        const navigate = useNavigate();

        // Function to get quantity
        const getQuantity = (id) => {
        const item = cartItems.find((x) => x.id === id);
        return item ? item.quantity : 0;
    };



   return (
    <div className="menu">

        <div className="menu-title">
            <h1>Our Menu</h1>
        </div>

        <div className="menu-section">

            {/* Menu left section */}
            <div className="menu-left">
                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836" alt="Food" />
                <h1>Menu</h1>
                <p>Explore our carefully curated dishes across categories.</p>
            </div>

            {/* Menu right section */}
            <div className="menu-right">

                {/* Navbar */}
                <div className="menu-navbar">

                    <button onClick={() => setCategory("All")}
                        className={category === "All" ? "active" : ""}>
                        All
                    </button>

                    <button onClick={() => setCategory("dessert")}
                        className={category === "dessert" ? "active" : ""}>
                        Dessert
                    </button>

                    <button onClick={() => setCategory("starters")}
                        className={category === "starters" ? "active" : ""}>
                        Starters
                    </button>

                    <button onClick={() => setCategory("chinese")}
                        className={category === "chinese" ? "active" : ""}>
                        Chinese
                    </button>

                    <button onClick={() => setCategory("drinks")}
                        className={category === "drinks" ? "active" : ""}>
                        Drinks
                    </button>

                    <button onClick={() => setCategory("intercontinental")}
                        className={category === "intercontinental" ? "active" : ""}>
                        Intercontinental
                    </button>

                </div>


                {/* MENU GRID */}
                <div className="menu-grid">

                    {filteredMenu.map((item) => (
                        <div className="menu-card" key={item.id}>

                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>

                            {/* <div className="menu-card-bottom">
                                <span className="menu-price">${item.price}</span>
                                <button className="order-btn">Order Now</button>
                            </div> */}



                            <div className="menu-card-bottom">
                                <span className="menu-price">${item.price}</span>

                                {getQuantity(item.id) === 0 ? (
                                    <button
                                    className="order-btn"
                                    onClick={() => addToCart(item)}
                                    >
                                    Order Now
                                    </button>
                                ) : (
                                    <div className="quantity-control">
                                    <button onClick={() => removeFromCart(item.id)}>-</button>
                                    <span>{getQuantity(item.id)}</span>
                                    <button onClick={() => addToCart(item)}>+</button>
                                    </div>
                                )}

                                {/* Go to cart button */}
                                {/* <button
                                    className="go-cart-btn"
                                    onClick={() => navigate("/cart")}
                                >
                                    Cart
                                </button> */}
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>

    </div>
    
  )
}

export default Menu
