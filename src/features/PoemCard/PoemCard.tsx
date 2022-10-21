import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import style from "./PoemCard.module.css";
import { Poem } from "../../models";
import { Link } from "react-router-dom";

interface PoemCardProps {
  poem: Poem;
}

function PoemCard({ poem }: PoemCardProps) {
  return (
    <Card className={`h-100 text-dark`}>
      <CardImg
        className={style.image}
        top
        src={poem.author.imageUrl}
        alt={poem.author.name}
      />
      <CardBody className="d-flex flex-column justify-content-end text-centered">
        <CardTitle className={`${style.overflow} small-caps fs-6 text-primary`}>
          {poem.author.name}
        </CardTitle>
        <CardText className={style.overflow}>{poem.title}</CardText>
        <Link className="btn btn-primary" to={`/poems/${poem.id}`}>
          Leggi poesia
        </Link>
      </CardBody>
    </Card>
  );
}

export default PoemCard;
