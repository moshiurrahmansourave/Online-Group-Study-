import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Assignments from "../pages/Assignments/Assignments";
import CreateAssignments from "../pages/CreateAssignments/CreateAssignments";
import MyAssignments from "../pages/MyAssignment/MyAssignments";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRouts from "../routs/PrivateRouts";
import AssignmentDet from "../pages/AssignmentDet/AssignmentDet";
import Submitted from "../pages/Submitted/Submitted";
import Update from "../pages/UpdateAssign/Update";
import Marking from "../pages/Submitted/Marking";


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
          element:<Assignments></Assignments>,
          loader: () => fetch('http://localhost:5000/assignment')
        },
        {
          path:'/create assignment',
          element:<PrivateRouts><CreateAssignments></CreateAssignments></PrivateRouts>
        },
        {
          path:'/my assignment',
          element:<PrivateRouts><MyAssignments></MyAssignments></PrivateRouts>,
          loader: () => fetch('http://localhost:5000/assignment')
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'/register',
          element:<Register></Register>
        },
        {
          path:'/submitted',
          element:<PrivateRouts><Submitted></Submitted></PrivateRouts>,
          
        },
        {
          path:'/marking/:id',
          element:<Marking></Marking>,
          loader:({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
        },
        {
          path:'/update/:id',
          element:<PrivateRouts><Update></Update></PrivateRouts>,
          loader:({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
        },
        {
          path:'assignmentdet/:id',
          element:<AssignmentDet></AssignmentDet>,
          loader:({params}) => fetch(`http://localhost:5000/assignment/${params.id}`)
      },
      ]
    },
  ]);

  export default router;