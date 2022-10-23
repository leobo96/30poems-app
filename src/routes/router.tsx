import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "../costants/routes";
import Layout from "../layouts/Layout";

const Catalogo = lazy(() => import("./Catalogo/Catalogo"));
const Home = lazy(() => import("./Home/Home"));
const Documentazione = lazy(() => import("./Documentazione/Documentazione"));
const DetailPage = lazy(() => import("./DetailPage/DetailPage"));

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
