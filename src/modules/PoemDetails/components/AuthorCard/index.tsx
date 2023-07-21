import { Card, CardBody, CardImg, CardSubtitle, CardTitle } from "reactstrap";
import defaultAuthorImage from "src/modules/common/assets/images/missing.jpg";
import { Author } from "src/modules/common/types";
import { buildImageUrlFromFileName } from "src/modules/common/utility/buildImageUrlFromFileName";
import style from "./AuthorCard.module.css";

interface AuthorCardProps {
  author: Author;
}

const AuthorCard = ({ author }: AuthorCardProps) => {
  return (
    <Card className={`h-100 ${style.card}`}>
      <CardImg
        className={style.image}
        top
        src={
          author.meta?.imageName
            ? buildImageUrlFromFileName(author.meta.imageName)
            : defaultAuthorImage
        }
        loading="lazy"
        alt={author.name}
      />
      <CardBody>
        <CardTitle tag="h3">{author.name}</CardTitle>
        {author.meta?.authorDescription && (
          <CardSubtitle className={style.overflow}>
            {author.meta?.authorDescription}
          </CardSubtitle>
        )}
        {author.meta?.wikipediaPageId && (
          <a
            href={`https://en.wikipedia.org/w/index.php?curid=${author.meta.wikipediaPageId}`}
            target="_blank"
            rel="noreferrer"
            className="d-block"
          >
            Vedi su Wikipedia
          </a>
        )}
        {author.meta?.wikidataId && (
          <a
            href={`https://www.wikidata.org/entity/${author.meta.wikidataId}`}
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
