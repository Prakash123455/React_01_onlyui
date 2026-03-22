import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import About from "./component/About.jsx";
import Contact from "./component/Contact.jsx";
import Login from "./component/Login.jsx";
import Cart from "./component/Cart.jsx";
import Home from "./component/Home.jsx";
import ErrorPage from "./component/ErrorPage.jsx";
import { productsLoader } from "./component/Home.jsx";
import { CartProvider } from "./component/store/cart-context.jsx";

import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";


const routeDefinitions = createRoutesFromElements(
  <Route path="/" element={<App />} errorElement={<ErrorPage />} >
    <Route index element={<Home />}  loader={productsLoader} />
    <Route path="/home" element={<Home />}  loader={productsLoader} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />}  />
    <Route path="/login" element={<Login />} />
    <Route path="/cart" element={<Cart />} />
  </Route>
);

const appRouter = createBrowserRouter(routeDefinitions);


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={appRouter} />
    </CartProvider>
  </StrictMode>
);