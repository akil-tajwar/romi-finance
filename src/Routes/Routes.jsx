import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Earn from "../Pages/Earn/Earn";

export const router = createBrowserRouter([
    {
      path: '/',
      element: <Main/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
        {
          path: '/dashboard',
          element: <Dashboard/>
        },
        {
          path: '/earn',
          element: <Earn/>
        }
      ]
    },
  ]);