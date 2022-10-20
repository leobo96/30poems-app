import { useEffect, useState } from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import { getWikiDataApi } from "../../api/author/getWikiDataApi";
import style from "./AuthorCard.module.css";

const AuthorCard = (props) => {
  const { image, name, authorWikiPageId } = props;

  const [authorDescription, setAuthorDescription] = useState();
  const [wikidataId, setWikidataId] = useState();

  useEffect(() => {
    getWikiDataApi(name).then((data) => {
      setAuthorDescription(data.authorDescription);
      setWikidataId(data.wikidataId);
    });
  }, [name]);

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
