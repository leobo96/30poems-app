import {
  getWikiPageId,
  prepareNameForWikipediaQuery,
} from "../../utility/utility";

// This API gives the wikidata id and a short description for an author given the name of the author
const API_URL_FOR_WIKIDATA_ID =
  "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageprops&format=json&titles=";

export interface AuthorWikiData {
  authorDescription?: string;
  wikidataId?: string;
}

export const getWikiDataApi = async (
  author: string
): Promise<AuthorWikiData | undefined> => {
  const authorNameAdjusted = prepareNameForWikipediaQuery(author);

  return fetch(API_URL_FOR_WIKIDATA_ID + authorNameAdjusted)
    .then((r) => r.json())
    .then((data) => {
      const entity = data.query.pages[getWikiPageId(data)].pageprops;
      if (entity?.disambiguation !== "") {
        return {
          authorDescription: entity?.["wikibase-shortdesc"],
          wikidataId: entity?.["wikibase_item"],
        };
      }
    });
};
