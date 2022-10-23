import { useQuery } from "@tanstack/react-query";
import { prepareNameForWikipediaQuery } from "../utility/prepareNameForWikipediaQuery";

// This API gives the wikidata id and a short description for an author given the name of the author
const API_URL_FOR_WIKIDATA_ID =
  "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageprops&format=json&titles=";

export interface AuthorWikiData {
  wikipediaPageId: string;
  imageName: string;
  authorDescription?: string;
  wikidataId?: string;
}

export const useAuthor = (name: string) => {
  return useQuery(["author", name], () => getAuthorDataApi(name));
};

const getAuthorDataApi = async (
  author: string
): Promise<AuthorWikiData | undefined> => {
  const authorNameAdjusted = prepareNameForWikipediaQuery(author);

  return fetch(API_URL_FOR_WIKIDATA_ID + authorNameAdjusted)
    .then((r) => r.json())
    .then((data) => {
      const wikipediaPageId = Object.keys(data.query.pages)[0];
      const entity = data.query.pages[wikipediaPageId].pageprops;
      if (entity?.disambiguation !== "") {
        return {
          wikipediaPageId,
          imageName: entity?.["page_image_free"],
          authorDescription: entity?.["wikibase-shortdesc"],
          wikidataId: entity?.["wikibase_item"],
        };
      }
    });
};
