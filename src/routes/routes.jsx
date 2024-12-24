import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import FindTutors from "../pages/FindTutors/FindTutors";
import Home from "../pages/Home/Home";
import MyTutorials from "../pages/MyTutorials/MyTutorials";
import AddTutorials from "../pages/AddTutorials/AddTutorials";
import BookTutors from "../pages/BookedTutors/BookTutors";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";
import PrivateRoute from "./PrivateRoute";
import Tutors from "../pages/Tutors/Tutors";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <p className="text-5xl text-center text-red-500">Error Page</p>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/find-tutors',
                element: <FindTutors></FindTutors>
            },
            {
                path: '/find-tutors/:language',
                element: <Tutors></Tutors>
            },
            {
                path: '/add-tutorials',
                element: <PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>
            },
            {
                path: '/my-tutorials',
                element: <PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>
            },
            {
                path: '/booked-tutors',
                element: <PrivateRoute><BookTutors></BookTutors></PrivateRoute>
            },
            {
                path: '/signIn',
                element: <SignIn></SignIn>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            }
        ]
    }
])
export default routes;