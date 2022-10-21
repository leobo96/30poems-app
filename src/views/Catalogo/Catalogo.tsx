import { useMemo, useState } from "react";
import { Col, Collapse, Container, NavLink, Row } from "reactstrap";
import CardsGrid from "../../components/CardsGrid/CardsGrid";
import PoemsTable from "../../components/PoemsTable/PoemsTable";
import { useStore } from "../../context/store";
import PoemCard from "../../features/PoemCard/PoemCard";
import { Poem } from "../../models";
import { InteractivePill } from "./../../components/InteractivePill/InteractivePill";
import { Switch } from "./../../components/Switch/Switch";

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
        key={author.name}
        text={author.name}
        isActive={activeFilters.includes(author.name)}
        onClick={() => onChange(author.name)}
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
      ? data.filter((poem) => activeFilters.includes(poem.author.name))
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
              card={dataToShow.map((poem) => (
                <NavLink to={`/poems/${poem.id}`} key={poem.id}>
                  <PoemCard poem={poem} />
                </NavLink>
              ))}
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
