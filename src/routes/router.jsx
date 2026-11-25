import { createBrowserRouter } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import About from "../pages/About";
import Categories from "../pages/Categories";
import Contact from "../pages/Contact";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import PreOrder from "../pages/PreOrder";
import Offers from "../pages/Offers";
import Wishlist from "../pages/Wishlist";
import Cart from "../pages/Cart";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductDetails from "../pages/ProductDetails";

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
        path: "/product/:id",
        element: <ProductDetails />,
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
        path: "offers",
        element: <Offers />,
      },
      {
        path: "wishlist",
        element: <Wishlist />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "blog/:slug",
        element: <BlogDetails />,
      },
    ],
  },

  // Authentication Pages (Without MainLayout)
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
