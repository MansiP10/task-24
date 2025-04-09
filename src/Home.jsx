import React, { useState, useContext } from 'react';
import { CartContext } from './context/CartContext';
import Cart from './Cart/Cart';

function Home() {
  const { addToCart } = useContext(CartContext);
  const [products] = useState([
    {
      id: 1,
      name: "White Casual Sneaker",
      price: 70,
      image: "https://t4.ftcdn.net/jpg/05/64/27/13/240_F_564271339_iOuhjbXf67te2OyMQK7jTQ0SfGiA748W.jpg",
    },
    {
      id: 2,
      name: "MACTREE Men's Mid Top Ankle Boots",
      price: 90,
      image: "https://t3.ftcdn.net/jpg/01/60/99/62/240_F_160996253_SOiLsl8c5PDxBJUbjf2i8WoeyJPPbwgu.jpg",
    },
    {
      id: 3,
      name: "Blue Sports Running Shoes",
      price: 60,
      image: "https://t3.ftcdn.net/jpg/00/31/29/86/240_F_31298629_3jyX4cpM16fH8jjECLGy2BXrvS1shE9a.jpg",
    },
    {
      id: 4,
      name: "Brown Leather Loafers",
      price: 120,
      image: "https://t4.ftcdn.net/jpg/03/24/22/29/240_F_324222984_eZYcvrYXx7FqzbwO1Jo038oFuPs4pz0J.jpg",
    },
    {
      id: 5,
      name: "Classic Black Formal Shoes",
      price: 100,
      image: "https://t3.ftcdn.net/jpg/10/48/71/26/240_F_1048712634_v1NLv2PbUxxAIU67FF4BGppvwPaMmKva.jpg",
    },
    {
      id: 6,
      name: "Red High-Top Sneakers",
      price: 75,
      image: "https://t4.ftcdn.net/jpg/00/20/99/73/240_F_20997361_UwcIHEbAYTQxcy9kiZ7rLDTxUxSFnfa7.jpg",
    },
    {
      id: 7,
      name: "Grey Slip-On Shoes",
      price: 85,
      image: "https://t3.ftcdn.net/jpg/01/16/19/52/240_F_116195230_qiPLv4WB9bSfH4ZAOpoYEmLOTJkqtGyZ.jpg",
    },
    {
      id: 8,
      name: "Green Trail Hiking Boots",
      price: 110,
      image: "https://t4.ftcdn.net/jpg/10/81/19/27/240_F_1081192753_BKEBlXtT9RceDlH60MOxmhdSN3qbzNBl.jpg",
    },
  ]);

  const handleAddToCart = (id) => {
    const product = products.find(item => item.id === id);
    addToCart(product);
  };

  return (
    <>
      <div className="product-list">
        {products.map((item) => (
          <div key={item.id} className="product-card">
            <img src={item.image} alt="product" />
            <div className="product-desc">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <button
                onClick={() => handleAddToCart(item.id)}
                disabled={item.iscart}
                style={{
                  backgroundColor: item.iscart ? "#ccc" : "rgb(138, 69, 29)",
                }}
              >
                {item.iscart ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          </div>
        ))}
      </div>
      <Cart />
    </>
  );
}

export default Home;