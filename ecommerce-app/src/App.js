import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Comonents/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Comonents/Layout";
import Homepage from "./Comonents/Homepage";
import ProductForm from "./Comonents/Products/ProductForm";

const routes = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Homepage />,
      },
      {
        path: "create-product",
        element: <ProductForm />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="#">
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
