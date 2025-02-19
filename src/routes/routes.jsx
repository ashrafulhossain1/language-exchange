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
import TutorDetails from "../pages/TutorDetails/TutorDetails";
import UpdateTutorial from "../pages/MyTutorials/UpdateTutorial";
import CategoryTutor from "../pages/CategoryTutor/CategoryTutor";
import AboutUs from "../pages/AboutUs/AboutUs";

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
                path: '/find-tutors/:category',
                element: <CategoryTutor></CategoryTutor>,
                loader: ({params})=>fetch(`https://language-express-server-a-10.vercel.app/tutors?category=${params.category}`)
            },
            {
                path: '/tutor/:id',
                element: <PrivateRoute> <TutorDetails></TutorDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://language-express-server-a-10.vercel.app/tutor/${params.id}`)
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
                path: '/tutorial-update/:updateId',
                element: <PrivateRoute><UpdateTutorial></UpdateTutorial></PrivateRoute>,
                loader: ({ params }) => fetch(`https://language-express-server-a-10.vercel.app/tutor/${params.updateId}`)
            },
            {
                path: '/my-books',
                element: <PrivateRoute><BookTutors></BookTutors></PrivateRoute>
            },
            {
                path: '/aboutUs',
                element: <AboutUs></AboutUs>

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