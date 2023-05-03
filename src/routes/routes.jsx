import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home/Home";
import LoginPage from "../components/LoginPage/LoginPage";
import Register from "../components/Register/Register";
import ChefRecipes from "../components/Chef/chefRecipes/chefRecipes";
import PrivateRout from "./PrivateRout";

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
            path:'recipes/:id',
            element:<PrivateRout><ChefRecipes/></PrivateRout>,
            loader:({ params })=> fetch(`http://localhost:3000/chefsDetails/${params.id}.json`)

        }
      ]
    },
  ]);

export default router;