import { Link } from "react-router-dom";
import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import defaultAuthorImage from "src/modules/common/assets/images/missing.jpg";
import { Poem } from "src/modules/common/types/poems";
import { buildImageUrlFromFileName } from "src/modules/common/utility/buildImageUrlFromFileName";
import style from "./PoemCard.module.css";

interface PoemCardProps {
  poem: Poem;
}

function PoemCard({ poem }: PoemCardProps) {
  return (
    <Card className={`h-100 text-dark`}>
      <CardImg
        className={style.image}
        top
        src={
          poem.author.meta?.imageName
            ? buildImageUrlFromFileName(poem.author.meta.imageName)
            : defaultAuthorImage
        }
        loading="lazy"
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
