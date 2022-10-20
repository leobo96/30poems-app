import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import AuthorCard from "../../components/AuthorCard/AuthorCard";
import { LoadingScreen } from "../../components/LoadingScreen/LoadingScreen";
import { useStore } from "../../context/store";
import { Poem } from "../../models";

interface ShowAllButtonProps {
  collapsed: boolean;
  setCollapsed: (a: boolean) => void;
}
const ShowAllButton = ({ collapsed, setCollapsed }: ShowAllButtonProps) => {
  return (
    <button
      className="btn btn-link text-primary ps-0"
      onClick={() => {
        setCollapsed(!collapsed);
      }}
    >
      {collapsed ? `Mostra tutto` : "Mostra meno"}
    </button>
  );
};

interface PoemContentProps {
  poem: Poem;
  collapsed: boolean;
  setCollapsed: (a: boolean) => void;
  id: number;
}
const PoemContent = ({
  poem,
  collapsed,
  setCollapsed,
  id,
}: PoemContentProps) => {
  const lines = poem.lines.map((line, index) => <p key={index}>{line}</p>);
  const firstFiveLines = lines.filter((_, index) => index < 5);

  return (
    <Row className="justify-content-between align-items-center">
      <Col sm className="text-start">
        <div className="overflow-scroll" style={{ maxHeight: "500px" }}>
          <h1 className="mb-3">{poem.title}</h1>
          {collapsed ? firstFiveLines : lines}
        </div>
        {lines.length > 5 ? (
          <ShowAllButton collapsed={collapsed} setCollapsed={setCollapsed} />
        ) : (
          ""
        )}
        {collapsed ? `(${poem.linecount} versi)` : ""}
      </Col>
      <Col
        sm
        className={`mt-3 d-flex justify-content-center justify-content-sm-end
        ${!collapsed ? "align-self-sm-start" : ""}`}
      >
        <AuthorCard
          id={id}
          image={poem.imageUrl}
          name={poem.author}
          authorWikiPageId={poem.wikiPageId}
        />
      </Col>
    </Row>
  );
};

function DetailPage() {
  const { poetryData: data } = useStore();

  const [collapsed, setCollapsed] = useState(true);

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
      <PoemContent
        id={id}
        poem={data[id]}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
      />

      <div className="text-center mt-3">
        <Link
          to={id + 1 === 30 ? "/poems/0" : `/poems/${id + 1}`}
          className="btn btn-outline-primary"
          onClick={() => setCollapsed(true)}
        >
          Cambia
        </Link>
      </div>
    </Container>
  );
}

export default DetailPage;
