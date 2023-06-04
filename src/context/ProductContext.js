/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useEffect, useState } from "react";
import data from "../data/myData.json";
import { useCookies } from "react-cookie";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(["isLoggin"]);

  const [productList, SetProductList] = useState([]);

  useEffect(() => {
    setCookie("isLoggin", false);
  }, []);

  useEffect(() => {
    SetProductList(data.products);
  }, []);

  const values = {
    productList,
    setCookie,
    cookies,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
export const allProductList = () => useContext(ProductContext);
