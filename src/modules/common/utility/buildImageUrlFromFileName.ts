const BASE_URL = "https://commons.wikimedia.org/w/thumb.php?f=";
const SIZE = "&w=";

export const buildImageUrlFromFileName = (filename: string, width = 200) => {
  return `${BASE_URL}${filename}${SIZE}${width}`;
};
