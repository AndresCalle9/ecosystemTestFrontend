import React from 'react'
import s from "./ProductCard.module.scss"



function ProductCard({info,status, date}) {
    const { ProductName, Currency, Tax} = info;
  return (
    <div className = {s.card}>
        <h3>Product: {ProductName}</h3>
      <p><b>Tax: </b>{Tax}</p>
      <p><b>Currency: </b>{Currency}</p>
      <p><b>Date: </b>{date}</p>
      <p><b>Status: </b>{status}</p>

      

    </div>
  );
}

export default ProductCard