import TableActions from "../component/table_actions";

export const columns = [
  {
    name: "ID",
    minWidth: "100px",
    selector: (row) => row.ID,
  },
  {
    name: "Operations",
    minWidth: "100px",
    selector: (row) => row.ID,
    cell: (row) => {
      return <TableActions row={row} />;
    },
  },
];
