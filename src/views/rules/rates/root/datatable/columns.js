import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const columns = [
  {
    name: "ConnectFee",
    minWidth: "100px",
    selector: (row) => row.ConnectFee,
  },
  {
    name: "RateUnit",
    minWidth: "100px",
    selector: (row) => row.RateUnit,
  },
  {
    name: "RateIncrement",
    minWidth: "100px",
    selector: (row) => row.RateIncrement,
  },
  {
    name: "GroupIntervalStart",
    minWidth: "100px",
    selector: (row) => row.GroupIntervalStart,
  },
  {
    name: "Rate",
    minWidth: "100px",
    selector: (row) => row.Rate,
  },
];
