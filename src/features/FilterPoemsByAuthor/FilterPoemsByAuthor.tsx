import { useState } from "react";
import { Collapse } from "reactstrap";
import { InteractivePill } from "../../components/InteractivePill/InteractivePill";
import { Poem } from "../../models";

export interface FilterPoemsByAuthorProps {
  data: Poem[];
  activeFilters: string[];
  onChange: (a: string) => void;
}
export const FilterPoemsByAuthor = ({
  data,
  activeFilters,
  onChange,
}: FilterPoemsByAuthorProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const authors = Array.from(new Set(data.map((poem) => poem.author))).sort();
  const pills = authors.map((author) => {
    return (
      <InteractivePill
        key={author.name}
        text={author.name}
        isActive={activeFilters.includes(author.name)}
        onClick={() => onChange(author.name)}
      />
    );
  });
  return (
    <div>
      <button
        className="btn btn-link text-primary ps-0"
        onClick={() => setIsOpen(!isOpen)}
      >
        Filtri<i className="ms-1 bi-caret-right"></i>
      </button>
      <Collapse isOpen={isOpen}>{pills}</Collapse>
    </div>
  );
};
