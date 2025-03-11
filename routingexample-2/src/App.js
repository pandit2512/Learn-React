import logo from "./logo.svg";
import "./App.css";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Layout from "./Components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Children } from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import Blogs from "./Components/Blogs";
import BlogDetails from "./Components/BlogDetails";
import Error from "./Components/Error";

const routes = createBrowserRouter([
  //if you want to throw custmize error for the path that you haven't created

  {
    path: "/*",
    element: <Error />,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact id={101} />,
      },

      // below is called index route, means about section will be only
      //visible  on Home Page

      {
        path: "",
        element: <Main />,
      },
      {
        path: "blogs",
        element: <Blogs />,
        children: [
          // below code will show the default blog data on page that you have entered in element
          // this you can achieve by adding path as empty string => line 33
          {
            index: true,
            element: (
              <BlogDetails id={102} author="Johnny" content="Gaming blogs" />
            ),
          },

          {
            path: "xyz-blog",
            element: (
              <BlogDetails
                id={101}
                author="Admino"
                content="Pshychology blogs"
              />
            ),
          },
          {
            path: "gmg-blog",
            element: (
              <BlogDetails id={102} author="Johnny" content="Gaming blogs" />
            ),
          },
        ],
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
