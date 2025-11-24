import React, { useState } from "react";
import Products from "./products";
import Cart from "./cart";
import "./style.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  return (
    <div className="container">
      <h1 className="title">🛒 E-market</h1>

      <button
        className="cart-btn"
        onClick={() => setShowCart(!showCart)}
      >
        View Cart ({cart.length})
      </button>

      {showCart ? (
        <Cart cart={cart} removeFromCart={removeFromCart} />
      ) : (
        <>
          <h2 className="section-title">Products</h2>
          <Products addToCart={addToCart} />
        </>
      )}
    </div>
  );
}

export default App;
