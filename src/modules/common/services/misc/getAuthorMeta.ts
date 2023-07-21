// This API gives the wikidata id and a short description for an author given the name of the author
const API_URL_FOR_WIKIDATA_ID =
  "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageprops&format=json&titles=";

type GetAuthorMetadataResponse = {
  batchcomplete: string;
  query: {
    normalized: [{ from: string; to: string }];
    pages: {
      [key: string]: {
        pageid: number;
        ns: number;
        title: string;
        pageprops: {
          disambiguation: string;
          toc: string;
          "wikibase-shortdesc": string;
          wikibase_item: string;
          page_image_free?: string;
        };
      };
    };
  };
};

export async function getAuthorMeta(authorName: string) {
  return await fetch(API_URL_FOR_WIKIDATA_ID + authorName)
    .then<GetAuthorMetadataResponse>((r) => r.json())
    .then((data) => {
      const wikipediaPageId = Object.keys(data.query.pages)[0];
      const entity = data.query.pages[wikipediaPageId].pageprops;

      if (entity?.disambiguation === "") {
        return null;
      }

      return {
        wikipediaPageId,
        imageName: entity?.["page_image_free"],
        authorDescription: entity?.["wikibase-shortdesc"],
        wikidataId: entity?.["wikibase_item"],
      };
    });
}
