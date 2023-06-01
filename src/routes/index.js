import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "../components/LoginPage";
const root = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
]);
function Routes() {
  return <RouterProvider router={root} />;
}

export default Routes;
