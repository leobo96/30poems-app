import React from "react";
import { Link } from "react-router-dom";
import style from "./Home.module.css";

function Home(props) {
  return (
    <>
      <section
        className={`${style.hero} d-flex justify-content-center align-items-center text-light`}
      >
        <div className="container p-5 d-flex flex-column align-items-center">
          <h1 className="text-center mb-5">
            30Poems è un'app che regala trenta poesie estratte casualmente dal
            database di poetryDb.
          </h1>
          <div className="row g-3">
            <div className="col text-center">
              <Link to="/poems/0" className="btn btn-primary text-nowrap">
                Leggi una poesia
              </Link>
            </div>
            <div className="col text-center">
              <Link to="/poems" className="btn btn-outline-primary text-nowrap">
                Esplora il catalogo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="container p-5">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <h2>Com'è stata sviluppata?</h2>
            <p>
              30Poems è stata sviluppata usando React.js e le librerie
              reactstrap e react-router-dom. I dati sono recuperati con una
              chiamata API a poetryDb. Le immagini sono invece estratte da
              Wikipedia. Vuoi dare un'occhiata al codice?
            </p>
            <Link
              to="/documentazione"
              className="btn btn-link text-primary float-end"
            >
              Vedi la documentazione
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
