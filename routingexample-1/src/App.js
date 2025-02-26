import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Login from "./Components/Login";
import User from "./Components/User";
import Product from "./Components/Product";

const routes = createBrowserRouter([
  // obj 1=> Home page
  {
    path: "",
    element: (
      <>
        <Navbar />
        <Main />
        <Footer />
      </>
    ),
  },
  //Obj 2
  {
    path: "/about",
    element: (
      <>
        <Navbar />
        <About />
      </>
    ),
  },

  //Obj 3
  {
    path: "/login",
    element: (
      <>
        <Navbar />
        <Login />
      </>
    ),
  },
  {
    path: "/users/:userId",
    element: (
      <>
        <Navbar />
        <User />
      </>
    ),
  },

  {
    path: "/products",
    element: (
      <>
        <Navbar />
        <Product />
      </>
    ),
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
