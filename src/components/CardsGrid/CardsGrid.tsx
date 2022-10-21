import { ReactElement } from "react";
import { Col, Row } from "reactstrap";

interface CardsGridProps {
  cards: ReactElement[];
  col?: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
}

function CardsGrid({
  cards,
  col = { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 },
}: CardsGridProps) {
  return (
    <Row
      className={`
        row-cols-${col.xs}
        row-cols-sm-${col.sm}
        row-cols-md-${col.md}
        row-cols-lg-${col.lg}
        row-cols-xl-${col.xl}
        `}
    >
      {cards.map((card) => (
        <Col className="pb-3" key={card.key}>
          {card}
        </Col>
      ))}
    </Row>
  );
}

export default CardsGrid;
