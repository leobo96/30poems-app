import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import defaultAuthorImage from "../../assets/images/missing.jpg";
import { Poem } from "../../models";
import { useAuthor } from "../../queries/useAuthor";
import { buildImageUrlFromFileName } from "../../utility/buildImageUrlFromFileName";
import style from "./PoemsTable.module.css";

interface PoemsTableProps {
  data: Poem[];
}

interface TableRowProps {
  poem: Poem;
}

const TableRow = ({ poem }: TableRowProps) => {
  const { data: authorWikidata } = useAuthor(poem.author);

  return (
    <tr key={poem.id}>
      <td>{poem.id}</td>

      <td className={style.image}>
        <img
          src={
            authorWikidata?.imageName
              ? buildImageUrlFromFileName(authorWikidata.imageName)
              : defaultAuthorImage
          }
          alt={poem.author}
          loading="lazy"
        />
      </td>

      <td>{poem.author}</td>

      <td>{poem.title}</td>

      <td>
        <NavLink className={style.action} to={`/poems/${poem.id}`}>
          Leggi poesia
        </NavLink>
      </td>
    </tr>
  );
};
function PoemsTable({ data }: PoemsTableProps) {
  const tableRows = data.map((poem) => <TableRow poem={poem} key={poem.id} />);

  return (
    <Table responsive borderless>
      <thead>
        <tr>
          <th>#</th>
          <th>Image</th>
          <th>Author</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>{tableRows}</tbody>
    </Table>
  );
}

export default PoemsTable;
