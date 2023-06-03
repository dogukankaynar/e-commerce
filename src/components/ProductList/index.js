import React from "react";
import Card from "../Card";
import { allProductList } from "../../context/ProductContext";

function ProductList() {
  const { productList } = allProductList();
  console.log("productList", productList[1]);
  return (
      <div className="product-list">
        {productList.map((product, index) => <div key={index}>
          <Card
            id={product.id}
            title={product.item_title}
            price={product.item_price}
            img={product.item_img}
          />
        </div>)}
      </div>
  );
}

export default ProductList;
