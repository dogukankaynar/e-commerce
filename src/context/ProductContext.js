/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useEffect, useState } from "react";
import data from "../data/myData.json";
import { useCookies } from "react-cookie";
const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [cookies, setCookie] = useCookies(["isLoggin"]);
  const [productList, SetProductList] = useState([]); //seacrhbar ile filtrele
  const [newList, setNewList] = useState("");

  useEffect(() => {
    setCookie("isLoggin", true);
    SetProductList(data.products);
    setNewList(data.products);
  }, []);

  const values = {
    productList,
    SetProductList,
    setCookie,
    cookies,
    newList,
    setNewList,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
export const allProductList = () => useContext(ProductContext);
