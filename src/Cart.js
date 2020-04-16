import React from "react";
import USD from "./USD";

const Cart = ({ items, onRemove }) => {
  return (
    <div style={{ display: "inline-block" }}>
      <p style={{ fontSize: "1.5rem" }}>Cart</p>
      {items.map((item, index) => (
        <div key={index}>
          {item.name} - <USD>{item.pricePerUnit / 100}</USD>
          <button
            onClick={(e) => {
              onRemove(index);
            }}
          >
            X
          </button>
        </div>
      ))}
      <USD>
        {items.reduce((total, item) => {
          return total + item.pricePerUnit;
        }, 0) / 100}
      </USD>
    </div>
  );
};

export default Cart;
