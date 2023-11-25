import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import SlotAction from "../components/slot_action";

export const slots_columns = [
  {
    name: "Identifier",
    minWidth: "100px",
    selector: (row) => row.Identifier,
  },
  {
    name: "BalanceId",
    minWidth: "100px",
    selector: (row) => row.BalanceId,
  },
  {
    name: "BalanceType",
    minWidth: "120px",
    selector: (row) => row.BalanceType,
  },
  {
    name: "BalanceWeight",
    minWidth: "130px",
    selector: (row) => row.BalanceWeight,
  },
  {
    name: "DestinationId",
    minWidth: "120px",
    selector: (row) => row.DestinationId,
  },
  {
    name: "Direction",
    minWidth: "100px",
    selector: (row) => row.Direction,
  },
  {
    name: "ExpiryTime",
    minWidth: "120px",
    selector: (row) => row.ExpiryTime,
  },
  {
    name: "ExtraParameters",
    minWidth: "140px",
    selector: (row) => row.ExtraParameters,
  },
  {
    name: "RatingSubject",
    minWidth: "130px",
    selector: (row) => row.RatingSubject,
  },
  {
    name: "Category",
    minWidth: "100px",
    selector: (row) => row.Category,
  },
  {
    name: "SharedGroup",
    minWidth: "120px",
    selector: (row) => row.SharedGroup,
  },
  {
    name: "Units",
    minWidth: "100px",
    selector: (row) => row.Units,
  },
  {
    name: "Weight",
    minWidth: "100px",
    selector: (row) => row.Weight,
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
