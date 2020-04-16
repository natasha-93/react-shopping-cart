import React from "react";

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

function USD({ children }) {
  return formatter.format(children);
}

export default USD;
