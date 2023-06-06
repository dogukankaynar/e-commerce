/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { allProductList } from "../../context/ProductContext";
function SearchBarComponent() {
  const { productList, setNewList } = allProductList();
  const [value, setValue] = useState("");

  useEffect(() => {
    const filter = productList.filter((product) =>
      product.item_title.toLowerCase().includes(value.toLocaleLowerCase())
    );
    setNewList(filter);
  }, [value]);

  return (
    <div>
      <input
        className="searchbar-input"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        type="text"
        placeholder="Search.."
      />
    </div>
  );
}

export default SearchBarComponent;
