import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { StoreProvider } from "./context/store";
import "./index.css";
import { router } from "./routes/router";

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider>
      <RouterProvider router={router} />
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
