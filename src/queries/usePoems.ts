import { useQuery } from "@tanstack/react-query";
import { Poem } from "../models";

export const usePoems = () => {
  return useQuery<Poem[]>(["poems"], getPoems);
};

export const getPoems = async () => {
  const response = await fetch("https://poetrydb.org/random/30").then((r) =>
    r.json()
  );

  if (response?.length > 0) {
    return response.map((poem: Poem, index: number) => ({
      ...poem,
      id: index,
    }));
  }
};
