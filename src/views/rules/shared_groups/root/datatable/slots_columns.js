import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import SlotAction from "../components/slot_action";

export const slots_columns = [
  {
    name: "Account",
    minWidth: "100px",
    selector: (row) => row.Account,
  },
  {
    name: "Strategy",
    minWidth: "100px",
    selector: (row) => row.Strategy,
  },
  {
    name: "RatingSubject",
    minWidth: "100px",
    selector: (row) => row.RatingSubject,
  },
  {
    name: "Actions",
    minWidth: "120px",
    maxWidth: "120px",
    selector: (row) => row.id,
    cell: (row) => {
      return <SlotAction id={row.id} />;
    },
  },
];
