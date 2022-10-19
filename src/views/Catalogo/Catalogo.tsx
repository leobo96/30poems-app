import React, { useState, useEffect } from "react";
import style from "./Catalogo.module.css";
import CardsGrid from "../../components/CardsGrid/CardsGrid";
import PoemsTable from "../../components/PoemsTable/PoemsTable";
import { Badge, Row, Col, Container, Collapse } from "reactstrap";
import { useStore } from "../../context/store";
import { Poem } from "../../models";

interface SwitchProps {
  displayGrid: boolean;
  setDisplayGrid: (a: boolean) => void;
}
const Switch = ({ displayGrid, setDisplayGrid }: SwitchProps) => {
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
interface FilterPillProps {
  author: string;
  activeFilters: string[];
  setActiveFilters: (a: string[]) => void;
}
const FilterPill = ({
  author,
  activeFilters,
  setActiveFilters,
}: FilterPillProps) => {
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

interface FilterProps {
  data: Poem[];
  activeFilters: string[];
  setActiveFilters: (a: string[]) => void;
}
const Filter = ({ data, activeFilters, setActiveFilters }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const authors = Array.from(new Set(data.map((poem) => poem.author))).sort();

  const pills = authors.map((author, index) => {
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

function Catalogo() {
  const { poetryData: data } = useStore();

  const [displayGrid, setDisplayGrid] = useState(true);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const [dataToShow, setDataToShow] = useState<Poem[]>([]);

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
