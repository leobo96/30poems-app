import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import defaultAuthorImage from "../../assets/images/missing.jpg";
import { useAuthor } from "../../queries/useAuthor";
import { buildImageUrlFromFileName } from "../../utility/buildImageUrlFromFileName";
import style from "./AuthorCard.module.css";

interface AuthorCardProps {
  author: string;
}

const AuthorCard = ({ author }: AuthorCardProps) => {
  const { data: authorWikidata } = useAuthor(author);

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
        alt={author}
      />
      <CardBody>
        <CardTitle tag="h3">{author}</CardTitle>
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
