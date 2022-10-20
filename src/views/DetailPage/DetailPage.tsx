import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Spinner } from "reactstrap";
import AuthorCard from "../../components/AuthorCard/AuthorCard";
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
    <div className="row justify-content-between align-items-center">
      <div className="col-sm text-start">
        <h1 className="mb-3">{poem.title}</h1>
        {collapsed ? firstFiveLines : lines}
        {lines.length > 5 ? (
          <ShowAllButton collapsed={collapsed} setCollapsed={setCollapsed} />
        ) : (
          ""
        )}
        {collapsed ? `(${poem.linecount} versi)` : ""}
      </div>
      <div
        className={`col-sm mt-3 d-flex justify-content-center justify-content-sm-end
        ${!collapsed ? "align-self-sm-start" : ""}`}
      >
        <AuthorCard
          id={id}
          image={poem.imageUrl}
          name={poem.author}
          authorWikiPageId={poem.wikiPageId}
        />
      </div>
    </div>
  );
};

function DetailPage() {
  const { poetryData: data } = useStore();

  const [collapsed, setCollapsed] = useState(true);

  const { number } = useParams();

  if (!number) {
    return <p>Error</p>;
  }

  const id = parseInt(number);

  return (
    <div className="container p-3">
      {data[id] ? (
        <PoemContent
          id={id}
          poem={data[id]}
          collapsed={collapsed}
          setCollapsed={setCollapsed}
        />
      ) : (
        <div className="text-center my-5">
          <Spinner className="">Caricamento...</Spinner>
        </div>
      )}

      <div className="text-center mt-3">
        <Link
          to={id + 1 === 30 ? "/poems/0" : `/poems/${id + 1}`}
          className="btn btn-outline-primary"
          onClick={() => setCollapsed(true)}
        >
          Cambia
        </Link>
      </div>
    </div>
  );
}

export default DetailPage;