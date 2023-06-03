import React from "react";

function Card({id,title,price,img}) {
  return (
    <div id={id} className="card-item">
      <div className="card">
        <img src={img} alt="Denim Jeans"/>
        <h1 className="title">{title}</h1>
        <p className="price">{price}</p>
        <p>
          <button>Add</button>
        </p>
      </div>
    </div>
  );
}

export default Card;
