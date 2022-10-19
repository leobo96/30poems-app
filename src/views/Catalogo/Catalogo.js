import React, { useState, useEffect } from "react";
import style from "./Catalogo.module.css";
import CardsGrid from "../../components/CardsGrid/CardsGrid";
import PoemsTable from "../../components/PoemsTable/PoemsTable";
import { Badge, Row, Col, Container, Collapse } from "reactstrap";

const Switch = (props) => {
  const { displayGrid, setDisplayGrid } = props;

  return (
    <div className={style.switch}>
      <div
        className={`${style.option} ${displayGrid ? style.active : null}`}
        onClick={() => setDisplayGrid(true)}
      >
        Grid
      </div>

      <div
        className={`${style.option} ${!displayGrid ? style.active : null}`}
        onClick={() => setDisplayGrid(false)}
      >
        Table
      </div>
    </div>
  );
};

const FilterPill = (props) => {
  const { author, activeFilters, setActiveFilters } = props;

  const [isActive, setIsActive] = useState(false);

  return (
    <Badge
      pill
      className={`me-1 mb-1 ${isActive ? "bg-primary" : ""}`}
      style={{ cursor: "pointer" }}
      onClick={() => {
        setActiveFilters(
          activeFilters.includes(author)
            ? activeFilters.filter((filter) => filter !== author)
            : [...activeFilters, author]
        );
        setIsActive(!isActive);
      }}
    >
      {author}
    </Badge>
  );
};

const Filter = (props) => {
  const { data, activeFilters, setActiveFilters } = props;

  const [isOpen, setIsOpen] = useState(false);

  const authors = [...new Set(data.map((poem) => poem.author))];

  const pills = authors.sort().map((author, index) => {
    return (
      <FilterPill
        key={index}
        author={author}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
    );
  });

  return (
    <div>
      <span
        className="btn btn-link text-primary ps-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filtri<i className="ms-1 bi-caret-right"></i>
      </span>
      <Collapse isOpen={isOpen}>{pills}</Collapse>
    </div>
  );
};

function Catalogo(props) {
  const { data } = props;

  const [displayGrid, setDisplayGrid] = useState(true);
  const [activeFilters, setActiveFilters] = useState([]);

  const [dataToShow, setDataToShow] = useState();

  useEffect(() => {
    setDataToShow(
      activeFilters.length !== 0
        ? data.filter((poem) => activeFilters.includes(poem.author))
        : data
    );
  }, [data, activeFilters]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Switch displayGrid={displayGrid} setDisplayGrid={setDisplayGrid} />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Filter
            data={data}
            activeFilters={activeFilters}
            setActiveFilters={setActiveFilters}
          />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col>
          {displayGrid ? (
            <CardsGrid
              data={dataToShow ? dataToShow : data}
              col={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            />
          ) : (
            <PoemsTable data={dataToShow ? dataToShow : data} />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Catalogo;
