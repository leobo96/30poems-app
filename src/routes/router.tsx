import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Catalogo from "./Catalogo/Catalogo";
import DetailPage from "./DetailPage/DetailPage";
import Documentazione from "./Documentazione/Documentazione";
import Home from "./Home/Home";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "poems",
          element: <Catalogo />,
        },
        {
          path: "documentazione",
          element: <Documentazione />,
        },
        {
          path: "poems/:number",
          element: <DetailPage />,
        },
      ],
    },
  ],
  { basename: "/30poems-app" }
);
