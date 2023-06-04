import React from "react";
import {allProductList} from "../../context/ProductContext"

function Card({ id, title, price, img }) {
  const {setIsLoggin}=allProductList();
  return (
    <div id={id} className="card-item">
      <div className="card">
        <img src={img} alt="" />
        <h1 className="title">{title}</h1>
        <p className="price">{price} TL</p>
        <button>Add</button>
      </div>
    </div>
  );
}

export default Card;
