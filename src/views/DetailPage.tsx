import { useParams } from "react-router-dom";
import { PoemDetails } from "src/modules/PoemDetails";
import { usePoems } from "../modules/common/queries/usePoems";

function DetailPage() {
  const { data, isLoading, isError } = usePoems();

  const { id } = useParams();

  if (!id || Number.isNaN(parseInt(id))) {
    throw Error("invalid parameter");
  }

  const poemId = parseInt(id);

  if (isLoading) {
    return <>isLoading...</>;
  }

  if (isError || !data) {
    throw new Error();
  }

  const poem = data.find((el) => el.id === poemId);

  if (!poem) {
    throw new Error();
  }

  return <PoemDetails poem={poem} />;
}

export default DetailPage;
