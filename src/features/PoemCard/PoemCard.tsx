import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import defaultAuthorImage from "../../assets/images/missing.jpg";
import { Poem } from "../../models";
import { useAuthor } from "../../queries/useAuthor";
import { buildImageUrlFromFileName } from "../../utility/buildImageUrlFromFileName";
import style from "./PoemCard.module.css";

interface PoemCardProps {
  poem: Poem;
}

function PoemCard({ poem }: PoemCardProps) {
  const { data: authorWikidata } = useAuthor(poem.author);

  return (
    <Card className={`h-100 text-dark`}>
      <CardImg
        className={style.image}
        top
        src={
          authorWikidata?.imageName
            ? buildImageUrlFromFileName(authorWikidata.imageName)
            : defaultAuthorImage
        }
        alt={poem.author}
      />
      <CardBody className="d-flex flex-column justify-content-end text-centered">
        <CardTitle className={`${style.overflow} small-caps fs-6 text-primary`}>
          {poem.author}
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
