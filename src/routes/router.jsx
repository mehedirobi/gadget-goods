import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Categories from "../pages/Categories";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import PreOrder from "../pages/PreOrder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
  path: "preorders",
  element: <PreOrder />,
},
      {
  path: "/blog",
  element: <Blog />,
},
{
  path: "/blog/:slug",
  element: <BlogDetails />,
},
    ],
  },
]);

export default router;
