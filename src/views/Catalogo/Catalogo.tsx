import { useMemo, useState } from "react";
import { Col, Container, NavLink, Row } from "reactstrap";
import CardsGrid from "../../components/CardsGrid/CardsGrid";
import PoemsTable from "../../features/PoemsTable/PoemsTable";
import { useStore } from "../../context/store";
import PoemCard from "../../features/PoemCard/PoemCard";
import { Switch } from "./../../components/Switch/Switch";
import { FilterPoemsByAuthor } from "../../features/FilterPoemsByAuthor/FilterPoemsByAuthor";

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
          <FilterPoemsByAuthor
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
              cards={dataToShow.map((poem) => (
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
