import { useQueries, useQuery } from "@tanstack/react-query";
import { getAuthorMeta } from "src/modules/common/services/misc/getAuthorMeta";
import { getPoems } from "src/modules/common/services/poems/poems";
import { Author } from "../types";

export const usePoems = () => {
  const { data: poemsData, isLoading, isError } = useQuery(["poems"], getPoems);

  const authorMetadataQueries = poemsData?.map((poem) => ({
    queryKey: ["author", poem.author.name],
    queryFn: () => getAuthorMeta(poem.author.prepareNameForWikipediaQuery()),
    enabled: !!poemsData,
  }));

  const results = useQueries({
    queries: authorMetadataQueries ?? [],
  });

  const result =
    poemsData &&
    results.map((meta, i) => ({
      ...poemsData[i],
      author: new Author(poemsData[i].author.name, meta.data),
    }));

  const isSomeQueryLoading = results.some((meta) => meta.isLoading);

  return {
    data: result ?? poemsData,
    isLoading: isLoading || isSomeQueryLoading,
    isError,
  };
};
