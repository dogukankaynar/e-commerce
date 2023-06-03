/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext,useEffect,useState } from "react";
import data from "../data/myData.json"

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [productList,SetProductList]=useState([])

    useEffect(()=>{
        SetProductList(data.products)
    },[])
    
  const values = {
    productList,
  };

  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};
export const allProductList = () => useContext(ProductContext);
