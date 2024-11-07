import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client';
import './index.css'
import './App.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from '../src/Components/home/Home.jsx'
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import WishLish from './Components/navBar/WishLish.jsx';
import CartsContainer from './Components/navBar/CartsContainer.jsx';
import Dashboard from './Components/DashBoard/Dashboard.jsx';
import Product_details from './Components/home/MainContainer/Procudt-container/Product_details.jsx';
import Purches from './Components/DashBoard/Purches.jsx';
import Statisticks from './Components/Statisticks/Statisticks.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "product_details/:product_id",
        element: <Product_details />,
        loader: () => fetch(`/allProduct.json`),
      },
      {
        path: "statistics",
        element: <Statisticks></Statisticks>,
        loader: () => fetch(`/title.json`)
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <CartsContainer />,
            loader: () => fetch(`/allProduct.json`),
          },
          {
            path: "wishedlist",
            element: <WishLish />,
            loader: () => fetch(`/allProduct.json`),
            
            
          },
        ],
      },
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  <ToastContainer></ToastContainer>
  </StrictMode>,
)
