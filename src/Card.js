import React from "react";
import USD from "./USD";

const Card = ({ title, color, price, onAdd, index }) => {
  return (
    <div style={{ backgroundColor: color, padding: "2rem", margin: "2rem" }}>
      {title} - <USD>{price / 100}</USD>
      <button
        style={{ display: "block", margin: "1rem" }}
        onClick={(e) => {
          onAdd(index);
        }}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default Card;
