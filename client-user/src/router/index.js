import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import DetailPage from "../pages/DetailPage";
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <HomePage />
      },
      {
        path: "menu",
        element: <MenuPage />
      },
      {
        path: "detail/:itemId",
        element: <DetailPage />
      }
    ]
  },
]);

export default router