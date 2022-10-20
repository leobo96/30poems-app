import { Poem } from "./../models/index";
export async function getPoems() {
  const response = await fetch("https://poetrydb.org/random/30").then((r) =>
    r.json()
  );

  if (response?.length > 0) {
    return response.map((poem: Poem, index: number) => ({
      ...poem,
      author: {
        name: poem.author,
      },
      id: index,
    }));
  }
}
