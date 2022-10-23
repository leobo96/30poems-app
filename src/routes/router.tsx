import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { ROUTES } from "../costants/routes";
import Layout from "../layouts/Layout";
import { queryClient } from "../queries";
import { getPoems } from "../queries/usePoems";

const Catalogo = lazy(() => import("./Catalogo/Catalogo"));
const Home = lazy(() => import("./Home/Home"));
const Documentazione = lazy(() => import("./Documentazione/Documentazione"));
const DetailPage = lazy(() => import("./DetailPage/DetailPage"));

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        {
          path: ROUTES.HOME,
          element: <Home />,
        },
        {
          path: ROUTES.DOCUMENTAZIONE,
          element: <Documentazione />,
        },
        {
          path: ROUTES.POEMS,
          loader: () => queryClient.fetchQuery(["poems"], getPoems),
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Catalogo />,
            },
            {
              path: ROUTES.POEM_DETAIL,
              element: <DetailPage />,
              errorElement: <p>Error...</p>,
            },
          ],
        },
      ],
    },
  ],

  { basename: "/30poems-app" }
);
