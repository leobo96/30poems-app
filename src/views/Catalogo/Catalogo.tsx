import { InteractivePill } from "./../../components/InteractivePill/InteractivePill";
import React, { useState, useEffect } from "react";
import style from "./Catalogo.module.css";
import CardsGrid from "../../components/CardsGrid/CardsGrid";
import PoemsTable from "../../components/PoemsTable/PoemsTable";
import { Row, Col, Container, Collapse } from "reactstrap";
import { useStore } from "../../context/store";
import { Poem } from "../../models";

interface SwitchProps {
  isSwitched: boolean;
  onChange: () => void;
  options: [string, string];
}
const Switch = ({ isSwitched, onChange, options }: SwitchProps) => {
  return (
    <div className={style.switch}>
      <div
        className={`${style.option} ${isSwitched ? style.active : null}`}
        onClick={() => {
          onChange();
        }}
      >
        {options[0]}
      </div>

      <div
        className={`${style.option} ${!isSwitched ? style.active : null}`}
        onClick={() => {
          onChange();
        }}
      >
        {options[1]}
      </div>
    </div>
  );
};

interface FilterProps {
  data: Poem[];
  activeFilters: string[];
  onChange: (a: string) => void;
}
const Filter = ({ data, activeFilters, onChange }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const authors = Array.from(new Set(data.map((poem) => poem.author))).sort();

  const pills = authors.map((author, index) => {
    return (
      <InteractivePill
        key={index}
        author={author}
        isActive={activeFilters.includes(author)}
        onClick={() => onChange(author)}
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

  const filterChangeHandler = (author: string) => {
    setActiveFilters((prevFilter) =>
      prevFilter.includes(author)
        ? prevFilter.filter((filter) => filter !== author)
        : [...prevFilter, author]
    );
  };

  const switchChangeHandler = () => {
    setDisplayGrid(!displayGrid);
  };

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
          <Switch
            isSwitched={displayGrid}
            onChange={switchChangeHandler}
            options={["Grid", "Table"]}
          />
        </Col>
      </Row>

      <Row className="mb-5">
        <Col>
          <Filter
            data={data}
            activeFilters={activeFilters}
            onChange={filterChangeHandler}
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
