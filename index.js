import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
        createBrowserRouter,
        RouterProvider,
        Route,
  } from "react-router-dom";
import "./Components/App.css";
import Home from './Pages/Home';
import Portal from './Pages/Portal';
import Registration from './Pages/Registration';
import Portallogin from './Pages/Portallogin';
import Loging from './Pages/Login-controller';
import Payment from './Pages/Payment';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/Portal",
      element: <Portal />
    },
    {
      path: "/Payment",
      element: <Payment />
    },
    {
      path: "/Registration",
      element: <Registration />
    },
    {
      path: "/Login",
      element: <Portallogin />
    },
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
 
);

//home page for the entire application:

reportWebVitals();
