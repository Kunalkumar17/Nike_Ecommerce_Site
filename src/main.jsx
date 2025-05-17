import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './components/ErrorPage.jsx';
import ProductDetail from './routes/ProductDetail.jsx';
import SignUp from './routes/SignUp.jsx';
import Login from './routes/login.jsx';
import Logout from './components/Logout.jsx';
import Collection from './routes/Collection.jsx';
import ShopContextProvider from './context/ShopContext.jsx';
import { ToastContainer } from 'react-toastify';
import { Cart } from './routes/Cart.jsx';
import { PlaceOrder } from './routes/PlaceOrder.jsx';
import Orders from './routes/Orders.jsx';
import Verify from './routes/Verify.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product-detail/:productID",
    element: <ProductDetail />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/logout',
    element: <Logout />
  },
  {
    path: '/collection',
    element: <Collection/>
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/place-order',
    element: <PlaceOrder/>
  },
  {
    path: '/orders',
    element: <Orders />
  },
  {
    path: '/verify',
    element: <Verify />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ShopContextProvider >
      <ToastContainer/>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </>,
)
