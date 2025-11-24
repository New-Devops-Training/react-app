import React from "react";

const productList = [
  { id: 1, name: "Laptop", price: 45000 },
  { id: 2, name: "Headphones", price: 1500 },
  { id: 3, name: "Smartphone", price: 25000 },
];

function Products({ addToCart }) {
  return (
    <div className="product-grid">
      {productList.map((item) => (
        <div key={item.id} className="card">
          <h3>{item.name}</h3>
          <p className="price">₹{item.price}</p>
          <button className="add-btn" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
