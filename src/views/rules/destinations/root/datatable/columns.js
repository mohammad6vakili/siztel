import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const columns = [
  {
    name: "DestinationId",
    minWidth: "100px",
    selector: (row) => row.DestinationId,
  },
  {
    name: "Prefixes",
    minWidth: "300px",
    selector: (row) => row.Prefixes,
  },
  {
    name: "Actions",
    minWidth: "120px",
    maxWidth: "120px",
    selector: (row) => row.uuid,
    cell: (row) => {
      return (
        <Link to={"/rules/destinations/update"}>
          <Button style={{ padding: 6 }} size="sm" color="primary">
            Update
          </Button>
        </Link>
      );
    },
  },
];
