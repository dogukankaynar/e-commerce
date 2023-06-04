import React from "react"
import './App.css';
import Routes from "./routes/index"
import {ProductProvider} from "./context/ProductContext"


function App() {

  return (
    <div>
    <ProductProvider>
      <Routes />
    </ProductProvider>
    </div>
  );
}

export default App;
