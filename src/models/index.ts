export interface Author {
  name: string;
  imageUrl: string;
  wikipediaPageId?: number;
}

export interface Poem {
  title: string;
  author: string;
  lines: string[];
  linecount: number;
  id?: number;
}
