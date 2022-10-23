import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import AuthorCard from "../../features/AuthorCard/AuthorCard";
import { PoemContent } from "../../features/PoemContent/PoemContent";
import { usePoems } from "../../queries/usePoems";

function DetailPage() {
  const { data } = usePoems();

  const { number } = useParams();

  if (!number || Number.isNaN(parseInt(number))) {
    throw Error("invalid parameter");
  }

  const id = parseInt(number);

  const poem = data?.find((el) => el.id === id);

  return (
    <>
      {poem && (
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
              to={id + 1 === 30 ? "/poems/0" : `/poems/${id + 1}`}
              className="btn btn-outline-primary"
            >
              Cambia
            </Link>
          </div>
        </Container>
      )}
    </>
  );
}

export default DetailPage;
