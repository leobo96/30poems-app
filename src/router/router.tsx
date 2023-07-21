import { lazy } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Main } from "src/modules/Main";

const Catalogo = lazy(() => import("../views/Catalogo"));
const Home = lazy(() => import("../views/Home"));
const Documentazione = lazy(() => import("../views/Documentazione"));
const DetailPage = lazy(() => import("../views/DetailPage"));

export const router = createBrowserRouter(
  [
    {
      element: <Main />,
      errorElement: <p>Error...</p>,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "documentazione",
          element: <Documentazione />,
        },
        {
          path: "poems",
          element: <Outlet />,
          children: [
            {
              path: "",
              element: <Catalogo />,
            },
            {
              path: ":id",
              element: <DetailPage />,
            },
          ],
        },
      ],
    },
  ],

  { basename: "/30poems-app" }
);
