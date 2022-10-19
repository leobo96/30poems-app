import { getPoems } from "./api/getPoems";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DetailPage from "./views/DetailPage/DetailPage";
import Catalogo from "./views/Catalogo/Catalogo";
import Home from "./views/Home/Home";
import Documentazione from "./views/Documentazione/Documentazione";

import Layout from "./layouts/Layout";

import { enrichAuthorsData } from "./utility/enrichAuthorsData";
import { Poem } from "./models";

function App() {
  const [poetryData, setPoetryData] = useState<Poem[]>([]);

  useEffect(() => {
    getPoems()
      .then((data) => enrichAuthorsData(data))
      .then((data) => setPoetryData(data));
  }, []);

  return (
    <BrowserRouter basename="30poems-app">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poems" element={<Catalogo data={poetryData} />} />
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
