export interface Poem {
  title: string;
  author: string;
  lines: string[];
  linecount: number;
  id?: string;
  pageId?: number;
  imageUrl?: string;
  wikiPageId?: string;
}
