import React from "react";
import { Table } from "reactstrap";
import style from "./PoemsTable.module.css";
import { NavLink } from "react-router-dom";
import { Poem } from "../../models";

interface PoemsTableProps {
  data: Poem[];
}
function PoemsTable({ data }: PoemsTableProps) {
  const tableRows = data.map((poem) => {
    return (
      <tr key={poem.id}>
        <td>{poem.id}</td>

        <td className={style.image}>
          <img
            src={poem.author.imageUrl}
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
  });

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
