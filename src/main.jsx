import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home.jsx';
import AddProduct from './Component/AddProduct.jsx';
import LogIn from './Component/LogIn.jsx';
import Registration from './Component/Registration.jsx';
import AuthProvider from './Component/AuthContext/AuthProvider.jsx';
import ErrorPage from './Component/ErrorPage.jsx';
import BrandDetails from './Component/Brand/BrandDetails.jsx';
import ViewDetails from './Component/Brand/ViewDetails.jsx';
import Update from './Component/Brand/Update.jsx';
import ViewCard from './Component/HomeContent/ViewCard/ViewCard.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import NewProduct from './Component/HomeContent/NewProduct.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children :[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>
      },
      {
        path: "/login",
        element: <LogIn></LogIn>
      },
      {
        path: "/registration",
        element: <Registration></Registration>
      },
      {
        path: "/:brand",
        element: <PrivateRoute><BrandDetails></BrandDetails></PrivateRoute>,
        
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)        
      },
      {
        path: "/details/:id",
        element: <ViewDetails></ViewDetails>,
        loader: ({ params }) => fetch(`http://localhost:5000/product/${params.id}`)
      },
      {
        path: "/viewCart",
        element : <ViewCard></ViewCard>,
        loader: () => fetch('http://localhost:5000/cart')
      },
      {
        path: "/latest",
        element : <NewProduct></NewProduct>
      }

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
  </React.StrictMode>,
)
