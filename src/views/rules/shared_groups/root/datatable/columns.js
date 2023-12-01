import TableActions from "../components/table_actions";

export const columns = [
  {
    name: "TPid",
    minWidth: "100px",
    selector: (row) => row.TPid,
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
