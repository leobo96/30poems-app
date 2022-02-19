import React, { useState, useEffect } from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import {
  getWikiPageId,
  prepareNameForWikipediaQuery,
  getWikidataIdAPI,
} from "../../utility/utility";
import style from "./AuthorCard.module.css";

const AuthorCard = (props) => {
  const { image, name, authorWikiPageId, id } = props;

  const [authorDescription, setAuthorDescription] = useState();
  const [wikidataId, setWikidataId] = useState();

  useEffect(() => {
    let authorNameAdjusted = prepareNameForWikipediaQuery(name);

    fetch(getWikidataIdAPI + authorNameAdjusted)
      .then((r) => r.json())
      .then((r) => {
        let entity = r.query.pages[getWikiPageId(r)].pageprops;
        if (entity?.disambiguation !== "") {
          console.log("entity " + JSON.stringify(entity));
          setAuthorDescription(entity && entity["wikibase-shortdesc"]);
          setWikidataId(entity && entity["wikibase_item"]);
        }
      });
  }, [id]);

  return (
    <Card className={`h-100 ${style.card}`}>
      <CardImg className={style.image} top src={image} alt={name} />
      <CardBody>
        <CardTitle tag="h3">{name}</CardTitle>
        {authorDescription ? (
          <CardSubtitle className={style.overflow}>
            {authorDescription}
          </CardSubtitle>
        ) : (
          ""
        )}
        {authorWikiPageId ? (
          <a
            href={`https://en.wikipedia.org/w/index.php?curid=${authorWikiPageId}`}
            target="_blank"
            rel="noreferrer"
            className="d-block"
          >
            Vedi su Wikipedia
          </a>
        ) : (
          ""
        )}
        {wikidataId ? (
          <a
            href={`https://www.wikidata.org/entity/${wikidataId}`}
            target="_blank"
            rel="noreferrer"
            className="d-block"
          >
            Guarda dati su wikidata
          </a>
        ) : (
          ""
        )}
      </CardBody>
    </Card>
  );
};

export default AuthorCard;
