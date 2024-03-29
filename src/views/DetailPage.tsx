import { useParams } from "react-router-dom";
import { LoadingScreen } from "src/common/components/LoadingScreen/LoadingScreen";
import { PoemDetails } from "src/modules/PoemDetails";
import { usePoems } from "../common/queries/usePoems";

function DetailPage() {
  const { data, isLoading, isError } = usePoems();

  const { id } = useParams();

  if (!id || Number.isNaN(parseInt(id))) {
    throw Error("invalid parameter");
  }

  const poemId = parseInt(id);

  if (isLoading) {
    return <LoadingScreen />;
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
