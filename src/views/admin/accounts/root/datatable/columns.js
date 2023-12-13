import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import moment from "moment";
import ActionButton from "../components/action_button";

export const columns = [
  {
    name: "ID",
    minWidth: "300px",
    selector: (row) => row.ID,
    cell: (row) => {
      return <span>{row.ID}</span>;
    },
  },
  {
    name: "AllowNegative",
    minWidth: "100px",
    selector: (row) => row.AllowNegative,
    cell: (row) => {
      return <span>{JSON.stringify(row.AllowNegative)}</span>;
    },
  },
  {
    name: "Disabled",
    minWidth: "200px",
    selector: (row) => row.Disabled,
    cell: (row) => {
      return <span>{JSON.stringify(row.Disabled)}</span>;
    },
  },
  {
    name: "UpdateTime",
    minWidth: "200px",
    selector: (row) => row.UpdateTime,
    cell: (row) => {
      return moment(row.UpdateTime).format("YYYY/MM/DD HH:mm:ss");
    },
  },
  {
    name: "Actions",
    minWidth: "200px",
    maxWidth: "200px",
    selector: (row) => row.uuid,
    cell: (row) => {
      return <ActionButton row={row} />;
    },
  },
];
