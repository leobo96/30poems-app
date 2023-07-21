import { Catalogo } from "src/modules/Catalogo";
import { usePoems } from "src/modules/common/queries/usePoems";

function CatalogoPage() {
  const { data, isLoading, isError } = usePoems();

  if (isLoading) {
    return <>loading</>;
  }

  if (isError || !data) {
    throw new Error();
  }

  return <Catalogo data={data} />;
}

export default CatalogoPage;
