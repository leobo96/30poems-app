import { Card, CardBody, CardText, CardTitle, Table } from "reactstrap";
import folderImage from "../../assets/images/folder-structure.png";
import imageComponenti from "../../assets/images/image-componenti.png";
import style from "./Documentazione.module.css";

function Documentazione() {
  return (
    <>
      <section
        className={`${style.hero} d-flex justify-content-center align-items-center`}
      >
        <h1 className="text-light">Documentazione</h1>
      </section>

      <section>
        <div className="container p-5">
          <div className="row align-items-center g-3">
            <div className="col-md">
              <h2>Struttura delle cartelle</h2>
              <p>L'app prevede 4 cartelle di base </p>
              <ul>
                <li>
                  <strong>views</strong>: include le 4 schermate dell'app (Home,
                  Documentazione, Catalogo, DetailPage);
                </li>
                <li>
                  <strong>components</strong>: include i vari componenti
                  dell'app;
                </li>
                <li>
                  <strong>utility</strong>: include i link alle API e funzioni
                  di utilità
                </li>
                <li>
                  <strong>assets</strong>: include le immagini del progetto
                </li>
              </ul>
            </div>
            <div className="col-md text-center">
              <img
                src={folderImage}
                alt="screen struttura cartelle"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container p-5">
          <h2 className="text-center">Le API</h2>
          <p className="text-center">30Poems fa uso di tre API</p>
          <div className="row mt-3 g-3">
            <div className="col">
              <Card className="h-100">
                <CardBody className="d-flex flex-column">
                  <CardTitle tag="h5">
                    <a
                      href="https://poetrydb.org/index.html"
                      target="_blank"
                      rel="noreferrer"
                    >
                      PoetryDb
                    </a>
                  </CardTitle>
                  <CardText className="flex-grow-1">
                    permette di interrogare un database di poesie e accetta tra
                    i vari parametri il numero di poesie e la possibilità di
                    selezionarle in modo casuale
                  </CardText>
                  <a
                    href="https://poetrydb.org/random/2"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Prova
                  </a>
                </CardBody>
              </Card>
            </div>

            <div className="col">
              <Card className="h-100">
                <CardBody className="d-flex flex-column">
                  <CardTitle tag="h5">getImageFromWikipediaAPI</CardTitle>
                  <CardText className="flex-grow-1">
                    API fornita da wikipedia che permette di estrarre le
                    immagini da una pagina wikipedia
                  </CardText>
                  <a
                    href="https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageimages&format=json&piprop=original&titles=William_Shakespeare"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Prova
                  </a>
                </CardBody>
              </Card>
            </div>

            <div className="col">
              <Card className="h-100">
                <CardBody className="d-flex flex-column">
                  <CardTitle tag="h5">getWikidataIdAPI</CardTitle>
                  <CardText className="flex-grow-1">
                    API fornita sempre da wikipedia e che permette di recuperare
                    l'ID della risorsa e una breve descrizione della stessa su
                    wikidata
                  </CardText>
                  <a
                    href="https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageprops&format=json&titles=William_Shakespeare"
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-primary"
                  >
                    Prova
                  </a>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container p-5">
          <h2 className="text-center">I Componenti</h2>
          <p className="text-center mb-4">
            30Poems è costruita attraverso 7 componenti di base
          </p>
          <div className="row align-items-center g-4">
            <div className="col-md text-center">
              <img src={imageComponenti} alt="screen elenco componenti" />
            </div>
            <div className="col-md">
              <Table responsive borderless striped size="sm">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Chiamato da</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>MainTemplate</td>
                    <td>App.js</td>
                  </tr>
                  <tr>
                    <td>Header</td>
                    <td>MainTemplate</td>
                  </tr>
                  <tr>
                    <td>Footer</td>
                    <td>MainTemplate</td>
                  </tr>
                  <tr>
                    <td>CardsGrid</td>
                    <td>Catagolo</td>
                  </tr>
                  <tr>
                    <td>PoemsTable</td>
                    <td>Catalogo</td>
                  </tr>
                  <tr>
                    <td>PoemCard</td>
                    <td>CardsGrid</td>
                  </tr>
                  <tr>
                    <td>AuthorCard</td>
                    <td>DetailPage</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary">
        <div className="container p-5 d-flex flex-column justify-content-center align-items-center">
          <h2 className="text-center mb-5">
            Interessato a studiare il codice sorgente?
          </h2>
          <a
            href="https://github.com/leobo96/30poems-app"
            target="_blank"
            rel="noreferrer"
            className={`btn btn-dark text-primary fw-bold`}
          >
            Visita il repository github
          </a>
        </div>
      </section>
    </>
  );
}

export default Documentazione;
