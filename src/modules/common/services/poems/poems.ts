import { Author, Poem } from "src/modules/common/types/poems";

export type GetPoemsResponseData = Array<{
  title: string;
  author: string;
  lines: string[];
  linecount: number;
}>;

export const getPoems = async (): Promise<Poem[]> => {
  const response = await fetch(
    "https://poetrydb.org/random/30"
  ).then<GetPoemsResponseData>((r) => r.json());

  return response.map((poem, index) => ({
    ...poem,
    id: index,
    author: new Author(poem.author),
  }));
};
