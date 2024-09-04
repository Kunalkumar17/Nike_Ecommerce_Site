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
import { loader as ProductDetailLoader } from './routes/ProductDetail.jsx';
import Logout from './components/Logout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/product-detail/:name",
    element: <ProductDetail />,
    loader: ProductDetailLoader,
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
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={router} />
  </>,
)
