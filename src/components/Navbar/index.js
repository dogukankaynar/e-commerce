import React from "react";
import CheckBoxItem from "./CheckBoxItem";
function Navbar() {
  const brand = ["HP", "APPLE", "XİAOİ", "VORCOM", "ASUS"];
  const price=["1000-2000","2000-3000","3000-4000","4000-5000","+ 5000"]
  const cateory=["Hızlı Teslimat","Kuponlu Ürünler","Birlikte Al Kazan","Videolu Ürünler","Fotoğraflı Yorumlar"]
  return (
    <div className="navbar">
      <div>
        <label>MARKA</label>
        <hr />
        {brand.map((item,index) => (
          <CheckBoxItem item={item} key={index} />
        ))}
      </div>
      <div>
      <label>FİYAT ARALIĞI</label>
      <hr/>
      {price.map((item,index) => (
          <CheckBoxItem item={item} key={index}  />
        ))}
      </div>
      <div>
      <hr/>
      {cateory.map((item,index) => (
          <CheckBoxItem item={item} key={index}  />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
