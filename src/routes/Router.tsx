import { Navigate } from "react-router-dom";
import { lazy } from "react";

const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

const ProductDetail = lazy(() => import("products/ProductList"));
const ProductList = lazy(() => import("products/ProductList"));
const Login = lazy(() => import("../features/login/login"));
const Landing = lazy(() => import("features/home/Landing"));

const ThemeRoutes = [
  {
    path: "/",
    element: <FullLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/products",
        element: <ProductList />,
      },
      {
        path: "/products/:slug",
        element: <ProductDetail />,
      },
    ],
  },
];

export default ThemeRoutes;
