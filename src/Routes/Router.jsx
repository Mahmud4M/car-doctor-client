import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Components/Authentication/SignIn";
import SignUp from "../Components/Authentication/SignUp";
import CheckOut from "../Pages/CheckOut/CheckOut";
import ErrorPage from "../Components/ErroPage/ErrorPage";
import Booking from "../Pages/Booking/Booking";
import PrivateRoutes from "./PrivateRoutes";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <SignIn></SignIn>
            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><CheckOut></CheckOut></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://car-doctor-server-omega-eight.vercel.app/services/${params.id}`)
            },
            {
                path: '/bookings',
                element: <PrivateRoutes><Booking></Booking></PrivateRoutes>
            }
        ]
    },
]);

export default router;