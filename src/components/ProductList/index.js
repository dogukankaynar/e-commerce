import React from "react";
import Card from "../Card";
import { allProductList } from "../../context/ProductContext";
import Header from "../Header"
function ProductList() {
  const { productList } = allProductList();
  return (
    <div>
    <div className="header">
      <Header />
    </div>
      <div className="product-list">
      <hr/>
        {productList.map((product, index) => (
          <div key={index}>
            <Card
              id={product.id}
              title={product.item_title}
              price={product.item_price}
              img={product.item_img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
