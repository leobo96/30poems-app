// This function is used to format the author name as the getImageFromWikipediaAPI request
export const prepareNameForWikipediaQuery = (name) => {
  let splitted = name.split(" ");
  splitted = splitted.map((word) => word[0].toUpperCase() + word.slice(1));
  return splitted.join("_");
};

// This Api gives access to images of a wikipedia article
// note: add &origin=* to avoid cors policy issues
export const getImageFromWikipediaAPI =
  "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageimages&format=json&piprop=original&titles=";

// This function is used to extract the wikipedia page id given the response of the getImageFromWikipediaAPI
// wikipedia page id is used to access the wikipedia image and to build the link to the wikipedia page
export const getWikiPageId = (object) => {
  const pages = object.query.pages;
  return Object.keys(pages)[0];
};

// This function is used to extract the image src given the response of the getImageFromWikipediaAPI
export const AccessImageUrl = (object) => {
  const pageId = getWikiPageId(object);
  return object.query.pages[pageId]?.original?.source;
};

// This API gives the wikidata id and a short description for an author given the name of the author
export const getWikidataIdAPI =
  "https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=pageprops&format=json&titles=";
