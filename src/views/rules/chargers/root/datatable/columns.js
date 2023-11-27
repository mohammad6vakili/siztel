import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const columns = [
  {
    name: "TPid",
    minWidth: "100px",
    selector: (row) => row.TPid,
  },
  {
    name: "Tenant",
    minWidth: "100px",
    selector: (row) => row.Tenant,
  },
  {
    name: "ID",
    minWidth: "100px",
    selector: (row) => row.ID,
  },
  {
    name: "ActivationTime",
    minWidth: "100px",
    selector: (row) => row.ActivationTime,
  },
  {
    name: "ExpiryTime",
    minWidth: "100px",
    selector: (row) => row.ExpiryTime,
  },
  {
    name: "RunID",
    minWidth: "100px",
    selector: (row) => row.RunID,
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
    selector: (row) => row.uuid,
    cell: (row) => {
      return (
        <Link to={"/rules/chargers/update"}>
          <Button style={{ padding: 6 }} size="sm" color="primary">
            Update
          </Button>
        </Link>
      );
    },
  },
];
