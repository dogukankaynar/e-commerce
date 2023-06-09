import React from "react";

function Card({ id, title, price, img }) {

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
