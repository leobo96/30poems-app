import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import AuthorCard from "../../components/AuthorCard/AuthorCard";
import { LoadingScreen } from "../../components/LoadingScreen/LoadingScreen";
import { useStore } from "../../context/store";
import { PoemContent } from "./components/PoemContent";

function DetailPage() {
  const { poetryData: data } = useStore();

  const { number } = useParams();
  const id = number && parseInt(number);

  if (!id) {
    return <p>Error</p>;
  }

  if (data?.length === 0) {
    return <LoadingScreen />;
  }

  if (data.length > 0 && !data[id]) {
    return <p>Error</p>;
  }

  return (
    <Container className="p-3">
      <Row className="justify-content-between align-items-start">
        <Col sm className="text-start">
          <PoemContent poem={data[id]} />
        </Col>
        <Col
          md
          className={`mt-3 d-flex justify-content-center justify-content-sm-end`}
        >
          <AuthorCard author={data[id].author} />
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
  );
}

export default DetailPage;
