import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import style from "./PoemCard.module.css";
import { NavLink } from "react-router-dom";

function PoemCard(props) {
  const { id, title, author, image } = props;

  return (
    <NavLink to={`/poems/${id}`}>
      <Card className={`h-100 text-dark`}>
        <CardImg className={style.image} top src={image} alt={author} />
        <CardBody className="d-flex flex-column justify-content-end text-centered">
          <CardTitle
            className={`${style.overflow} small-caps fs-6 text-primary`}
          >
            {author}
          </CardTitle>
          <CardText className={style.overflow}>{title}</CardText>
          <div className="btn btn-primary" to={`/poems/${id}`}>
            Leggi poesia
          </div>
        </CardBody>
      </Card>
    </NavLink>
  );
}

export default PoemCard;
