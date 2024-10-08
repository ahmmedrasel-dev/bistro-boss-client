import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import MainMenu from "../Pages/Menu/Menu/MainMenu";
import Order from "../Pages/Order/Order/Order";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <MainMenu></MainMenu>,
      },
      {
        path: "/orders/:category",
        element: <Order></Order>,
      },
    ],
  },
]);
