import React, { useState } from "react";
import products from "./data";
import Card from "./Card";
import Cart from "./Cart";

const App = () => {
  const [search, setSearch] = useState("");
  const [cartContents, setCartContents] = useState([]);

  return (
    <div>
      <input
        style={{ margin: "2rem", fontSize: "1.5rem" }}
        placeholder="Search..."
        value={search}
        type="text"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <Cart
        items={cartContents}
        onRemove={(index) => {
          const newCart = cartContents.filter((product, i) => {
            return i !== index;
          });
          setCartContents(newCart);
        }}
      />
      <ul
        style={{
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {products
          .filter((product) => {
            const regex = new RegExp(`^${search}.*$`, "i");

            return regex.test(product.name);
          })
          .map((product, index) => (
            <li key={product.name}>
              <Card
                title={product.name}
                color={product.color}
                price={product.pricePerUnit}
                index={index}
                onAdd={(index) => {
                  setCartContents([...cartContents, products[index]]);
                }}
              />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default App;
