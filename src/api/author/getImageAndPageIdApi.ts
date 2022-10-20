import { prepareNameForWikipediaQuery } from "../../utility/utility";

const IMAGE_FROM_WIKIPEDIA_URL =
  "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageimages&format=json&piprop=original&titles=";

interface ResponseData {
  ns: number;
  original?: {
    height: number;
    width: number;
    source: string;
  };
  pageid: number;
  title: string;
}

interface ImageAndPageId {
  pageId: number;
  imageUrl?: string;
}

export const getImageAndPageIdApi = async (
  author: string
): Promise<ImageAndPageId> => {
  const authorNameAdjusted = prepareNameForWikipediaQuery(author);

  const url1 = IMAGE_FROM_WIKIPEDIA_URL + authorNameAdjusted;
  // const url2 = url1 + "_(Poet)";

  const data = (await fetchWikipediaData(url1)) as ResponseData;

  if (!data) {
    throw new Error("No data found");
  }

  const pageId = data.pageid;
  const imageUrl = data?.original?.source;

  return { pageId, imageUrl };
};

function fetchWikipediaData(url: string) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const pageId = Object.keys(data.query.pages)[0];
        if (pageId === "-1") reject("no data found");
        resolve(data.query.pages[pageId]);
      });
  });
}
