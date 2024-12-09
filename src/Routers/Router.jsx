import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      Children: [
        {
          path:'/register',
          element: <Register></Register>,
      },
      {
          path:'/login',
          element: <LogIn></LogIn>,
      }
      ]
    },
  ]);
  export default router