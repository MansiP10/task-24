import React, { useEffect, useState } from "react";
import "./Cart.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Cart({ data, increaseQuantity, decreaseQuantity }) {
    const { addToCart } = useContext(CartContext);
  const [amount, setAmount] = useState(0);
  const location = useLocation();

  // Update total amount whenever data changes
  useEffect(() => {
    const total = data
      .filter((item) => item.iscart)
      .reduce((sum, item) => sum + item.price * item.qnty, 0);
    setAmount(total);
  }, [data]);

  
  const isHomePage = location.pathname === "/";

  return (
    <div className="cart-list">
      <h2>Cart</h2>
      <div>
        {data
          .filter((item) => item.iscart)
          .map((item, i) => (
            <div key={i} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
              <div className="cart-desc">
                <p>{item.name}</p>
                <span>${item.price}</span>
              </div>
              </div>
              {isHomePage ? (
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <p>{item.qnty}</p>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              ):''}
            </div>
          ))}
      </div>
      <h3 className="total-amount">Total: ${amount}.00</h3>
      {isHomePage ? (
        <Link to="/payment" className="proceed-wrapper">
          <button className="proceed-to-pay-btn" onClick={() => addToCart(data)}>
            Proceed To Payment
          </button>
        </Link>
      ) : (
        <Link to="/" className="proceed-wrapper">
          <button className="proceed-to-pay-btn"  onClick={() => addToCart(data)} >
            Back To Shopping
          </button>
        </Link>
      )}
    </div>
  );
}

export default Cart;
