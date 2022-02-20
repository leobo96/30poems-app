import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DetailPage from "./views/DetailPage/DetailPage";
import Catalogo from "./views/Catalogo/Catalogo";
import Home from "./views/Home/Home";
import Documentazione from "./views/Documentazione/Documentazione";

import MainTemplate from "./components/MainTemplate/MainTemplate";

import {
  AccessImageUrl,
  getWikiPageId,
  getImageFromWikipediaAPI,
  prepareNameForWikipediaQuery,
} from "./utility/utility";

import defaultAthorImage from "./assets/images/missing.jpg";
import Logo from "./assets/images/logo.png";

function App() {
  const [poetryData, setPoetryData] = useState([]);
  const [poetryDataFinal, setPoetryDataFinal] = useState([]);

  const nav = [
    { url: "/", text: "Home" },
    { url: "/documentazione", text: "Documentazione" },
    { url: "/poems", text: "Catalogo" },
  ];

  useEffect(() => {
    fetch("https://poetrydb.org/random/30")
      .then((r) => r.json())
      .then((r) => {
        setPoetryData(r.map((poem, index) => ({ ...poem, id: index })));
      })
      .catch((error) => console.log("Error: " + error));
  }, []);

  useEffect(() => {
    let newPoetryData = [...poetryData];

    poetryData.forEach((poem, index) => {
      let authorNameAdjusted = prepareNameForWikipediaQuery(poem.author);

      fetch(getImageFromWikipediaAPI + authorNameAdjusted)
        .then((r) => r.json())
        .then((r) => {
          let imageUrl = AccessImageUrl(r);
          let pageId = getWikiPageId(r);
          if (imageUrl === undefined) {
            // Second try...
            fetch(getImageFromWikipediaAPI + authorNameAdjusted + "_(Poet)")
              .then((r) => r.json())
              .then((r) => {
                imageUrl = AccessImageUrl(r);
                pageId = getWikiPageId(r);
              })
              .catch((error) => console.log("Error: " + error));
          }

          newPoetryData[index].imageUrl = imageUrl || defaultAthorImage;
          newPoetryData[index].wikiPageId = pageId;

          setPoetryDataFinal([...newPoetryData]);
        })
        .catch((error) => console.log("Error: " + error));
    });
  }, [poetryData]);

  return (
    <BrowserRouter basename="30poems-app">
      <MainTemplate navItems={nav} logo={Logo}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/poems" element={<Catalogo data={poetryDataFinal} />} />
          <Route path="/documentazione" element={<Documentazione />} />
          <Route
            path="/poems/:number"
            element={<DetailPage data={poetryDataFinal} />}
          />
        </Routes>
      </MainTemplate>
    </BrowserRouter>
  );
}

export default App;
