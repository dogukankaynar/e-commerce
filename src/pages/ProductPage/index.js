import React from "react";
import Navbar from "../../components/Navbar";
import ProductList from "../../components/ProductList";
import { allProductList } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";

function ProductPage() {
  const { cookies } = allProductList();
  const navigate = useNavigate();

  return (
    <div className="container-product-page">
      {cookies.isLoggin === "true" ? (
        <>
          <Navbar />
          <ProductList />
        </>
      ) : (
        navigate("/")
      )}
    </div>
  );
}

export default ProductPage;
