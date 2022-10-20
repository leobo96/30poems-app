export interface Author {
  name: string;
  imageUrl: string;
  wikipediaPageId?: number;
}

export interface Poem {
  title: string;
  author: Author;
  lines: string[];
  linecount: number;
  id?: string;
}
