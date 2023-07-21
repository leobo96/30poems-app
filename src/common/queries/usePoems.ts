import { useQueries, useQuery } from "@tanstack/react-query";
import { getAuthorMeta } from "src/common/services/misc/getAuthorMeta";
import { getPoems } from "src/common/services/poems/poems";
import { Author } from "../types";

export const usePoems = () => {
  const { data: poemsData, isLoading, isError } = useQuery(["poems"], getPoems);

  const authorMetadataQueries = poemsData?.map((poem) => ({
    queryKey: ["author", poem.author.name],
    queryFn: () => getAuthorMeta(poem.author.prepareNameForWikipediaQuery()),
    enabled: !!poemsData,
    retries: 0,
  }));

  const results = useQueries({
    queries: authorMetadataQueries ?? [],
  });

  const result =
    poemsData &&
    results.map((meta, i) =>
      meta.data
        ? {
            ...poemsData[i],
            author: new Author(poemsData[i].author.name, meta.data),
          }
        : poemsData[i]
    );

  return {
    data: result ?? poemsData,
    isLoading: isLoading,
    isError,
  };
};
