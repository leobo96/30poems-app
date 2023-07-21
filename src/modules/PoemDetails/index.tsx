import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { Poem } from "src/modules/common/types";
import { links } from "src/router";
import AuthorCard from "./components/AuthorCard";
import { PoemContent } from "./components/PoemContent";

type PoemDetailsProps = {
  poem: Poem;
};

export const PoemDetails = ({ poem }: PoemDetailsProps) => {
  return (
    <Container className="p-3">
      <Row className="justify-content-between align-items-start">
        <Col sm className="text-start">
          <PoemContent poem={poem} />
        </Col>
        <Col
          md
          className={`mt-3 d-flex justify-content-center justify-content-sm-end`}
        >
          <AuthorCard author={poem.author} />
        </Col>
      </Row>

      <div className="text-center mt-3">
        <Link
          to={links.poems.id(poem.id + 1 === 30 ? poem.id : poem.id + 1)}
          className="btn btn-outline-primary"
        >
          Cambia
        </Link>
      </div>
    </Container>
  );
};
