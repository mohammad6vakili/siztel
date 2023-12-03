import TableActions from "../components/table_actions";

export const columns = [
  {
    name: "ID",
    minWidth: "100px",
    selector: (row) => row.ID,
  },
  {
    name: "Operations",
    minWidth: "100px",
    selector: (row) => row.TPid,
    cell: (row) => {
      return <TableActions row={row} />;
    },
  },
];
