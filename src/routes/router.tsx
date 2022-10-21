import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../costants/routes";
import Layout from "../layouts/Layout";
import Catalogo from "./Catalogo/Catalogo";
import DetailPage from "./DetailPage/DetailPage";
import Documentazione from "./Documentazione/Documentazione";
import Home from "./Home/Home";

export const router = createBrowserRouter(
  [
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: ROUTES.HOME,
          element: <Home />,
        },
        {
          path: ROUTES.POEMS,
          element: <Catalogo />,
        },
        {
          path: ROUTES.DOCUMENTAZIONE,
          element: <Documentazione />,
        },
        {
          path: ROUTES.POEM_DETAIL,
          element: <DetailPage />,
        },
      ],
    },
  ],
  { basename: "/30poems-app" }
);
