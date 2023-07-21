export interface AuthorWikiData {
  wikipediaPageId: string;
  imageName?: string;
  authorDescription?: string;
  wikidataId?: string;
}

export class Author {
  name: string;
  meta?: AuthorWikiData;

  constructor(name: string, meta?: AuthorWikiData) {
    this.name = name;
    this.meta = meta;
  }

  prepareNameForWikipediaQuery() {
    let splitted = this.name.split(" ");
    splitted = splitted.map((word) => word[0].toUpperCase() + word.slice(1));
    return splitted.join("_");
  }
}

export interface Poem {
  title: string;
  author: Author;
  lines: string[];
  linecount: number;
  id: number;
}
