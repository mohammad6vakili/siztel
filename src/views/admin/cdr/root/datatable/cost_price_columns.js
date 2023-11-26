import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import CostPriceAction from "../components/cost_price_action";

export const columns = [
  {
    name: "Title",
    minWidth: "100px",
    selector: (row) => row.Title,
  },
  {
    name: "Cost",
    minWidth: "100px",
    selector: (row) => row.Cost,
  },

  {
    name: "Actions",
    minWidth: "120px",
    maxWidth: "120px",
    selector: (row) => row.uuid,
    cell: (row) => {
      return <CostPriceAction id={row.id} />;
    },
  },
];
