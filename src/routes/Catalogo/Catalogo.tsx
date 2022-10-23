import { useMemo, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import CardsGrid from "../../components/CardsGrid/CardsGrid";
import { Switch } from "../../components/Switch/Switch";
import { FilterPoemsByAuthor } from "../../features/FilterPoemsByAuthor/FilterPoemsByAuthor";
import PoemCard from "../../features/PoemCard/PoemCard";
import PoemsTable from "../../features/PoemsTable/PoemsTable";
import { usePoems } from "../../queries/usePoems";

function Catalogo() {
  const { data } = usePoems();
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
    return data && activeFilters.length !== 0
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

      {data && dataToShow && (
        <>
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
                  cards={dataToShow?.map((poem) => (
                    <PoemCard poem={poem} key={poem.id} />
                  ))}
                />
              ) : (
                <PoemsTable data={dataToShow} />
              )}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
}

export default Catalogo;
