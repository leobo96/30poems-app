import { Switch } from "./../../components/Switch/Switch";
import { InteractivePill } from "./../../components/InteractivePill/InteractivePill";
import React, { useState, useMemo } from "react";
import CardsGrid from "../../components/CardsGrid/CardsGrid";
import PoemsTable from "../../components/PoemsTable/PoemsTable";
import { Row, Col, Container, Collapse } from "reactstrap";
import { useStore } from "../../context/store";
import { Poem } from "../../models";

interface FilterProps {
  data: Poem[];
  activeFilters: string[];
  onChange: (a: string) => void;
}
const Filter = ({ data, activeFilters, onChange }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const authors = Array.from(new Set(data.map((poem) => poem.author))).sort();

  const pills = authors.map((author) => {
    return (
      <InteractivePill
        key={author}
        text={author}
        isActive={activeFilters.includes(author)}
        onClick={() => onChange(author)}
      />
    );
  });

  return (
    <div>
      <button
        className="btn btn-link text-primary ps-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filtri<i className="ms-1 bi-caret-right"></i>
      </button>
      <Collapse isOpen={isOpen}>{pills}</Collapse>
    </div>
  );
};

function Catalogo() {
  const { poetryData: data } = useStore();

  const [displayGrid, setDisplayGrid] = useState(true);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const filterChangeHandler = (author: string) => {
    setActiveFilters((prevFilter) =>
      prevFilter.includes(author)
        ? prevFilter.filter((filter) => filter !== author)
        : [...prevFilter, author]
    );
  };

  const dataToShow = useMemo(() => {
    return activeFilters.length !== 0
      ? data.filter((poem) => activeFilters.includes(poem.author))
      : data;
  }, [activeFilters, data]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <Switch
            isSwitched={displayGrid}
            onChange={() => setDisplayGrid(!displayGrid)}
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
              data={dataToShow}
              col={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            />
          ) : (
            <PoemsTable data={dataToShow} />
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Catalogo;
