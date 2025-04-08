import React, { useState } from 'react';
import './Payment.css';
import { CartContext } from "../context/CartContext";
import Cart from "../Cart/Cart";
import { useContext } from "react";


const Payment = () => {
  const { cart, increaseQuantity, decreaseQuantity } = useContext(CartContext);
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Payment confirmed with ${paymentMethod}`);
  };

  return (
    <>
    <div className="payment-container">
      <div className="payment-method">
        <label>
          <input
            type="radio"
            name="payment"
            value="Cash on Delivery"
            checked={paymentMethod === 'Cash on Delivery'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Cash on Delivery
        </label>

        <label>
          <input
            type="radio"
            name="payment"
            value="Credit Card"
            checked={paymentMethod === 'Credit Card'}
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
          Credit Card
        </label>
      </div>

      {paymentMethod === 'Credit Card' && (
        <form className='payment-form' onSubmit={handleSubmit}>
        <div className="card-details">
          <label>Enter your card number:</label>
          <input
            type="text"
            placeholder="Card Number"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />

          <label>Enter your card's expiry date:</label>
          <input
            type="text"
            placeholder="Expiry Date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            required
          />

          <label>Enter your CVV number:</label>
          <input
            type="text"
            placeholder="CVV"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="confirm-btn">
        Confirm Payment
        </button>
        </form>
      )}
    </div>
    {cart.length > 0 ? (
        cart.map((product) => (
          <Cart
            key={product.id}
            data={product}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ))
      ) : (
        <p>No Products in Cart</p>
      )}
    </>
  );
};

export default Payment;