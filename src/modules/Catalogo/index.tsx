import { useMemo, useState } from "react";
import { Col, Container, Row } from "reactstrap";
import CardsGrid from "src/modules/common/components/CardsGrid/CardsGrid";
import { Switch } from "src/modules/common/components/Switch/Switch";
import { Poem } from "src/modules/common/types";
import { FilterPoemsByAuthor } from "./components/FilterPoemsByAuthor";
import PoemCard from "./components/PoemCard";
import PoemsTable from "./components/PoemsTable";

type CatalogoProps = { data: Poem[] };

export const Catalogo = ({ data }: CatalogoProps) => {
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
    </Container>
  );
};
