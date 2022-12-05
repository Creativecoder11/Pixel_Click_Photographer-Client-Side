import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddServices from "../Components/AddServices/AddServices";
import Blog from "../Components/Blog/Blog";
import Home from "../Components/Home/Home/Home";
import Services from "../Components/Home/Services/Services/Services";
import ServicesData from "../Components/Home/Services/ServicesData/ServicesData";
import ServicesPage from "../Components/Home/Services/ServicesPage/ServicesPage";
import ServicesPageDetails from "../Components/Home/Services/ServicesPageDetails/ServicesPageDetails";
import Login from "../Components/Login/Login";
import MyReviews from "../Components/MyReviews/MyReviews";
import Register from "../Components/Register/Register";
import Review from "../Components/Review/Review";
import Main from "../Layout/Main/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <ServicesData></ServicesData>,
        loader: () => fetch("https://pixel-click-photographer-server.vercel.app/services"),
      },
      {
        path: "/services/:id",
        element: <ServicesPageDetails></ServicesPageDetails>,
        loader: ({ params }) =>
          fetch(`https://pixel-click-photographer-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/reviews/:id",
        element: <Review></Review>,
        loader: ({ params }) =>
          fetch(`https://pixel-click-photographer-server.vercel.app/services/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/myreviews",
        element: (
          <PrivateRoute>
            <MyReviews></MyReviews>
          </PrivateRoute>
        ),
      },
      {
        path: "/addservices",
        element: (
          <PrivateRoute>
            <AddServices></AddServices>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
