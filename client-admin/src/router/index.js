import { createBrowserRouter, redirect } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CategoryPage from "../pages/CategoryPage";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      if (!localStorage.access_token) throw redirect('/login');
      return null;
    },
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "categories",
        element: <CategoryPage />
      },
      {
        path: "register",
        element: <RegisterPage />
      },
    ]
  },
  {
    path: "login",
    element: <LoginPage />,
    loader: () => {
      if (localStorage.access_token) throw redirect('/');
      return null;
    },
  },
]);

export default router