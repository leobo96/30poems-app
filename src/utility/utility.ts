// This function is used to format the author name as the getImageFromWikipediaAPI request
export const prepareNameForWikipediaQuery = (name: string) => {
  let splitted = name.split(" ");
  splitted = splitted.map((word) => word[0].toUpperCase() + word.slice(1));
  return splitted.join("_");
};
