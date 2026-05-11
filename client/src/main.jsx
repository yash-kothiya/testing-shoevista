import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import App from "./App.jsx";
import About from "./components/About.jsx";
import ProductDetails from "./components/ProductDetails.jsx";
import SearchResults from "./components/SearchResults.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { WishListProvider } from "./context/WishListContext.jsx";
import "./index.css";
import Cart from "./pages/Cart.jsx";
import Home from "./pages/Home.jsx";
import Kids from "./pages/Kids.jsx";
import Login from "./pages/Login.jsx";
import Men from "./pages/Men.jsx";
import SignUp from "./pages/SignUp.jsx";
import WishList from "./pages/WishList.jsx";
import Women from "./pages/Women.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      { path: "/cart", element: <Cart /> },
      { path: "/wishlist", element: <WishList /> },
      { path: "/shoes/men", element: <Men /> },
      { path: "/shoes/women", element: <Women /> },
      { path: "/shoes/kids", element: <Kids /> },
      { path: "/about", element: <About /> },
      { path: "/product-details/:id", element: <ProductDetails /> },
      { path: "/search/:search", element: <SearchResults /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WishListProvider>
      <CartProvider>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
        <ToastContainer />
      </CartProvider>
    </WishListProvider>
  </React.StrictMode>,
);
