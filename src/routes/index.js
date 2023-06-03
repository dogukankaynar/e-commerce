import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import ProductPage from "../pages/ProductPage";

const root = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/product",
    element:<ProductPage/>,
  },
]);
function Routes() {
  return <RouterProvider router={root} />;
}

export default Routes;
