import { LoadingScreen } from "src/common/components/LoadingScreen/LoadingScreen";
import { usePoems } from "src/common/queries/usePoems";
import { Catalogo } from "src/modules/Catalogo";

function CatalogoPage() {
  const { data, isLoading, isError } = usePoems();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (isError || !data) {
    throw new Error();
  }

  return <Catalogo data={data} />;
}

export default CatalogoPage;
