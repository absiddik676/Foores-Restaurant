import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import LoginPage from "../components/LoginPage/LoginPage";
import Register from "../components/Register/Register";
import ChefRecipes from "../components/Chef/chefRecipes/chefRecipes";
import PrivateRout from "./PrivateRout";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../ErrorPage/ErrorPage";
import UserProfile from "../components/UserProfile/UserProfile";
import AboutPage from "../components/AboutPage/AboutPage";

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
            path:'login',
            element:<LoginPage/>
        },
        {
            path:'register',
            element:<Register/>
        },
        {
            path:'blog',
            element:<Blog/>
        },
        {
            path:'recipes/:id',
            element:<PrivateRout><ChefRecipes/></PrivateRout>,
            loader:({ params })=> fetch(`https://assignment-10-server-gold.vercel.app/chefsDetails/${params.id}.json`)

        },
        {
          path:'profile',
          element:<PrivateRout><UserProfile/></PrivateRout>
        },
        {
          path:'about',
          element:<AboutPage/>
        }
        
      ]
    },
    {
      path:'*',
      element:<ErrorPage/>
    }
  ]);

export default router;