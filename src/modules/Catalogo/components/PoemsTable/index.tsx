import { NavLink } from "react-router-dom";
import { Table } from "reactstrap";
import defaultAuthorImage from "src/modules/common/assets/images/missing.jpg";
import { Poem } from "src/modules/common/types";
import { buildImageUrlFromFileName } from "src/modules/common/utility/buildImageUrlFromFileName";
import style from "./PoemsTable.module.css";

interface PoemsTableProps {
  data: Poem[];
}

interface TableRowProps {
  poem: Poem;
}

const TableRow = ({ poem }: TableRowProps) => {
  return (
    <tr key={poem.id}>
      <td>{poem.id}</td>

      <td className={style.image}>
        <img
          src={
            poem.author.meta?.imageName
              ? buildImageUrlFromFileName(poem.author.meta.imageName)
              : defaultAuthorImage
          }
          alt={poem.author.name}
          loading="lazy"
        />
      </td>

      <td>{poem.author.name}</td>

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
