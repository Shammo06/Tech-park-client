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

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
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
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
