import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <div className="cart-list">
      <h2>Cart</h2>
      {cart.length > 0 ? (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
              <div className="cart-desc">
                <p>{item.name}</p>
              </div>
                <div className="quantity-controls">
                  <span>${item.price}</span>
                  <div>
                  {isHomePage && (
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                  )}
                    <p>{item.qnty}</p>
                  {isHomePage && (
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                  )}
                  </div>
                </div>

            </div>
          </div>
        ))
      ) :''}
      <h3 className="total-amount">
        Total: ${cart.reduce((total, item) => total + item.price * item.qnty, 0)}
      </h3>
      {isHomePage ? (
        <Link to="/payment" className='proceed-wrapper'>
          <button className="proceed-to-pay-btn">Proceed To Payment</button>
        </Link>
      ) : (
        <Link to="/" className='proceed-wrapper'>
          <button className="proceed-to-pay-btn">Back To Shopping</button>
        </Link>
      )}
    </div>
  );
}

export default Cart;