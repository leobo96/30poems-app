import React from "react";
import PoemCard from "../PoemCard/PoemCard";

function CardsGrid(props) {
  const { data, col } = props;

  const cardCols = data.map((poem, index) => {
    return (
      <div className="col pb-3" key={index}>
        <PoemCard
          id={poem?.id}
          title={poem.title}
          lineCount={poem.linecount}
          author={poem.author}
          image={poem.imageUrl}
        />
      </div>
    );
  });

  return (
    <div
      className={`row
        row-cols-${col.xs}
        row-cols-sm-${col.sm}
        row-cols-md-${col.md}
        row-cols-lg-${col.lg}
        row-cols-xl-${col.xl}
        `}
    >
      {cardCols}
    </div>
  );
}

export default CardsGrid;
