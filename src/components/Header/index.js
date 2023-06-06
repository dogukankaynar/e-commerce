import React, { useEffect } from "react";
import SearchBar from "../FormComponents/SearchBarComponent";
import { allProductList } from "../../context/ProductContext";
import { useNavigate } from "react-router-dom";
function Header() {
  const { cookies, setCookie } = allProductList();
  const navigate = useNavigate();

  useEffect(() => {
    cookies.isLoggin === "false" && navigate("/");
  }, [cookies.isLoggin]);

  return (
    <div className="row">
      <SearchBar />
      <span
        className="material-symbols-outlined"
        onClick={() => setCookie("isLoggin", false)}
      >
        logout
      </span>
    </div>
  );
}

export default Header;
