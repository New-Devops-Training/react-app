import React from "react";

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <h2 className="section-title">Your Cart</h2>

      {cart.length === 0 && <p className="empty">Cart is empty 🤷‍♂️</p>}

      {cart.map((item) => (
        <div key={item.id} className="card cart-card">
          <h3>{item.name}</h3>
          <p className="price">₹{item.price}</p>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
