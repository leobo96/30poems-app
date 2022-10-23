import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import { StoreProvider } from "./context/store";
import "./index.css";
import { router } from "./routes/router";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <Suspense fallback={<LoadingScreen />}>
        <RouterProvider router={router} />
      </Suspense>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
