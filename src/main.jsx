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
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
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
        element: <BrandDetails></BrandDetails>
      },
      {
        path: "/update/:id",
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({ params }) => fetch(`https://tech-park-server-abamnbza9-shammo06.vercel.app/product/${params.id}`)        
      },
      {
        path: "/details/:id",
        element: <PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://tech-park-server-abamnbza9-shammo06.vercel.app/product/${params.id}`)
      },
      {
        path: "/viewCart",
        element : <PrivateRoute><ViewCard></ViewCard></PrivateRoute>,
        loader: () => fetch('https://tech-park-server-abamnbza9-shammo06.vercel.app/cart')
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
