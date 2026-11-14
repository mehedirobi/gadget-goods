
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Categories from "../pages/Categories";
import Contact from "../pages/Contact";

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
      },{
        path: "about",
        element: <About></About>,
      },{
        path: "categories",
        element: <Categories></Categories>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      }
    ],
  },
]);

export default router;
