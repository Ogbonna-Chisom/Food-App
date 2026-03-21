// import React, { useState } from 'react'
// import './Navbar.css'
// import { assets } from '../../../../../food-del-assets/assets/frontend_assets/assets'
// import { Link } from 'react-router-dom'
// import { NavLink } from 'react-router-dom'
// // import { routes } from '../../config/routes'

// import { useNavigate } from 'react-router-dom'

// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";


// const Navbar = ({setShowLogin}) => {

//   const [menu, setMenu] = useState("menu");
//   const [menuOpen, setMenuOpen] = useState(false);

//   const navigate = useNavigate();

//   const { cartItems } = useContext(CartContext);
//   const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);


//   return (
//     <div className='navbar'>
//       <h1 className="logo">Food Base</h1>
//       <ul className="navbar-menu" > 

        
//         <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Link> 
//         {/* <Link to={routes.home}>Home</Link> */}

//         {/* <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a> */}
//         <NavLink to="/menu" onClick={()=>setMenu("menu")}>Menu</NavLink>
//         {/* <Link to={routes.menu}>Menu</Link> */}

//         {/* <a href='#about' onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>About</a> */}
//         <NavLink to="/about" onClick={()=>setMenu("menu")}>About</NavLink>

//         {/* <a href='#reservation' onClick={()=>setMenu("reservation")} className={menu==="reservation"?"active":""}>Reservation</a> */}
//         <NavLink to="/reservation" onClick={()=>setMenu("reservation")}>Reservation</NavLink>




//         <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
        
//       </ul>
//       <div className="navbar-right">
//         <img src={assets.search_icon} alt="" />
//         <div className="navbar-search-icon">

//           {/* <img src={assets.basket_icon} alt="" /> */}
        
//             <img 
//               src={assets.basket_icon} 
//               alt="cart" 
//               onClick={() => navigate("/cart")} 
//               style={{ cursor: "pointer" }}
//             />



//           {/* <div className="dot"></div> */}
//             {totalItems > 0 && (
//             <div className="cart-count">
//               {totalItems}
//             </div>
//           )}


          
//         </div>
//         <button onClick={() =>setShowLogin(true)}>Sign In</button>
//       </div>
//       <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>☰</div>
//     </div>
//   )
// }

// export default Navbar



import React, { useState, useContext } from "react";
import "./Navbar.css";
// import { assets } from "../../../../../food-del-assets/assets/frontend_assets/assets";
import { assets } from "../../assets/asset";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);

  const totalItems = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const handleLinkClick = (value) => {
    setMenu(value);
    setMenuOpen(false); // closes mobile menu
  };



  return (
    <div className="navbar">
      {/* LOGO */}
      <h1 className="logo">Food Base</h1>

      {/* NAV LINKS */}
      <ul className={menuOpen ? "navbar-menu active" : "navbar-menu"}>

        { /* This made the home to be active even when i click the view menu button in the hero section.

        <Link to="/" onClick={() => handleLinkClick("home")} 
          className={menu === "home" ? "active" : ""}>
          Home
        </Link> */}

         
        <NavLink to="/" onClick={() => handleLinkClick("home")}>Home</NavLink> 
          
        <NavLink to="/menu" onClick={() => handleLinkClick("menu")}>Menu</NavLink>
          
        <NavLink to="/about" onClick={() => handleLinkClick("about")}>About</NavLink>
          
        <NavLink to="/reservation" onClick={() => handleLinkClick("reservation")}>
          Reservation
        </NavLink>

        <NavLink to="/contact" onClick={() => handleLinkClick("contact")}>Contact</NavLink>
        
        
        {/* <a
          href="#about-us"
          onClick={() => handleLinkClick("contact")}
          className={menu === "contact" ? "active" : ""}
        >
          Contact Us
        </a> */}
      </ul>

      {/* RIGHT SECTION */}
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />

        <div className="navbar-search-icon">
          <img
            src={assets.basket_icon}
            alt="cart"
            onClick={() => navigate("/cart")}
          />

          {totalItems > 0 && (
            <div className="cart-count">{totalItems}</div>
          )}
        </div>

        <button onClick={() => setShowLogin(true)}>Sign In</button>

        {/* HAMBURGER */}
        <div
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
