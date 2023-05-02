import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import LoginPage from "../components/LoginPage/LoginPage";
import Register from "../components/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/login',
            element:<LoginPage/>
        },
        {
            path:'/register',
            element:<Register/>
        }
      ]
    },
  ]);

export default router;