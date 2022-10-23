import { QueryClientProvider } from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { LoadingScreen } from "./components/LoadingScreen/LoadingScreen";
import "./index.css";
import { router } from "./routes/router";
import { queryClient } from "./utility/queryClient";

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<LoadingScreen />}>
        <RouterProvider router={router} />
      </Suspense>
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
