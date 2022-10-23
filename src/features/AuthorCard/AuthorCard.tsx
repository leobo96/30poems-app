import { useEffect, useState } from "react";
import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import {
  AuthorWikiData,
  getAuthorDataApi,
} from "../../api/author/getAuthorData";
import defaultAuthorImage from "../../assets/images/missing.jpg";
import { Author } from "../../models";
import { buildImageUrlFromFileName } from "../../utility/buildImageUrlFromFileName";
import style from "./AuthorCard.module.css";

interface AuthorCardProps {
  author: Author;
}

const AuthorCard = ({ author }: AuthorCardProps) => {
  const [authorWikidata, setAuthorWikidata] = useState<
    AuthorWikiData | undefined
  >();

  useEffect(() => {
    getAuthorDataApi(author.name).then((data) => {
      setAuthorWikidata(data);
    });
  }, [author.name]);

  return (
    <Card className={`h-100 ${style.card}`}>
      <CardImg
        className={style.image}
        top
        src={
          authorWikidata?.imageName
            ? buildImageUrlFromFileName(authorWikidata.imageName)
            : defaultAuthorImage
        }
        alt={author.name}
      />
      <CardBody>
        <CardTitle tag="h3">{author.name}</CardTitle>
        {authorWikidata?.authorDescription && (
          <CardSubtitle className={style.overflow}>
            {authorWikidata.authorDescription}
          </CardSubtitle>
        )}
        {authorWikidata?.wikipediaPageId && (
          <a
            href={`https://en.wikipedia.org/w/index.php?curid=${authorWikidata.wikipediaPageId}`}
            target="_blank"
            rel="noreferrer"
            className="d-block"
          >
            Vedi su Wikipedia
          </a>
        )}
        {authorWikidata?.wikidataId && (
          <a
            href={`https://www.wikidata.org/entity/${authorWikidata.wikidataId}`}
            target="_blank"
            rel="noreferrer"
            className="d-block"
          >
            Guarda dati su wikidata
          </a>
        )}
      </CardBody>
    </Card>
  );
};

export default AuthorCard;
