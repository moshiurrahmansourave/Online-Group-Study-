import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Assignments from "../pages/Assignments/Assignments";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import MyAssignments from "../pages/MyAssignment/MyAssignments";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
          path:'/assignments',
          element:<Assignments></Assignments>
        },
        {
          path:'/create assignment',
          element:<CreateAssignments></CreateAssignments>
        },
        {
          path:'/my assignment',
          element:<MyAssignments></MyAssignments>
        },
        {
          path:'/login',
          element:<Login></Login>
        }
      ]
    },
  ]);

  export default router;