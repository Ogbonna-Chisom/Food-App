// import React, { useContext } from 'react'
// import './Cart.css'

// const Cart = () => {

//     const{cartItems,food_list,removeFromCart} = useContext(storeContext);



//   return (
//     <div className='cart'>
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//       </div>
      
//     </div>
//   )
// }

// export default Cart



// import { useContext } from "react";
// import { CartContext } from "../../context/CartContext";

// const Cart = () => {
//   const { cartItems } = useContext(CartContext);

//   return (
//     <div>
//       <h1>Your Cart</h1>

//       {cartItems.length === 0 ? (
//         <p>No items in cart</p>
//       ) : (
//         cartItems.map((item) => (
//           <div key={item.id}>
//             <h3>{item.name}</h3>
//             <p>Quantity: {item.quantity}</p>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;



import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./Cart.css";

const Cart = () => {
  // const { cartItems, addToCart, removeFromCart } = useContext(CartContext);

  const { cartItems, addToCart, removeFromCart, deleteFromCart } = useContext(CartContext);

  // Calculate total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">

      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>

                <img src={item.image} alt={item.name} />

                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                </div>

                {/* Quantity Control */}
                <div className="cart-quantity">
                  <button onClick={() => removeFromCart(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => addToCart(item)}>+</button>
                </div>

                {/* Total per item */}
                <div className="cart-total">
                  ${item.price * item.quantity}
                </div>

                {/* Remove completely */}
                {/* <button
                  className="remove-btn" onClick={() => removeFromCart(item.id)}>
                  Remove
                </button> */}

                <button
                  className="remove-btn" onClick={() => deleteFromCart(item.id)}>
                  Remove
                </button>
                  
              </div>
            ))}

          </div>

          {/* Cart Summary */}
          <div className="cart-summary">

            <h2>Total: ${totalPrice}</h2>

            <button className="checkout-btn">
              Proceed to Checkout
            </button>

          </div>
        </>
      )}
    </div>
  );
};

export default Cart;