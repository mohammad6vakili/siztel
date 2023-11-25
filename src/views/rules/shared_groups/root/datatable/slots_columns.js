import { Button } from "reactstrap";
import { Link } from "react-router-dom";
import SlotAction from "../components/slot_action";

export const slots_columns = [
  {
    name: "ActivationTime",
    minWidth: "100px",
    selector: (row) => row.ActivationTime,
  },
  {
    name: "RatingPlanId",
    minWidth: "100px",
    selector: (row) => row.RatingPlanId,
  },
  {
    name: "FallbackSubjects",
    minWidth: "100px",
    selector: (row) => row.FallbackSubjects,
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
