import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DetailPage from "./views/DetailPage/DetailPage";
import Catalogo from "./views/Catalogo/Catalogo";
import Home from "./views/Home/Home";
import Documentazione from "./views/Documentazione/Documentazione";

import Layout from "./layouts/Layout";

import { useStore } from "./context/store";

function App() {
  const { poetryData } = useStore();

  return (
    <BrowserRouter basename="30poems-app">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poems" element={<Catalogo />} />
          <Route path="/documentazione" element={<Documentazione />} />
          <Route
            path="/poems/:number"
            element={<DetailPage data={poetryData} />}
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
