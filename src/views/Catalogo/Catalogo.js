import React, { useState } from "react";
import style from "./Catalogo.module.css";
import CardsGrid from "../../components/CardsGrid/CardsGrid";
import PoemsTable from "../../components/PoemsTable/PoemsTable";

const Switch = (props) => {
  const { displayGrid, setDisplayGrid } = props;

  return (
    <div className={style.switch}>
      <div
        className={`${style.option} ${displayGrid ? style.active : null}`}
        onClick={() => setDisplayGrid(true)}
      >
        Grid
      </div>

      <div
        className={`${style.option} ${!displayGrid ? style.active : null}`}
        onClick={() => setDisplayGrid(false)}
      >
        Table
      </div>
    </div>
  );
};

function Catalogo(props) {
  const [displayGrid, setDisplayGrid] = useState(true);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <Switch displayGrid={displayGrid} setDisplayGrid={setDisplayGrid} />
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col">
          {displayGrid ? (
            <CardsGrid
              data={props.data}
              col={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }}
            />
          ) : (
            <PoemsTable data={props.data} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Catalogo;
