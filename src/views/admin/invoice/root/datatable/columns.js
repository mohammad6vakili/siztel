import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const columns = [
  {
    name: "AccountImsi",
    minWidth: "100px",
    selector: (row) => row.AccountImsi,
  },
  {
    name: "StartTime",
    minWidth: "100px",
    selector: (row) => row.StartTime,
  },
  {
    name: "EndTime",
    minWidth: "100px",
    selector: (row) => row.EndTime,
  },
  {
    name: "InvoicePrice",
    minWidth: "100px",
    selector: (row) => row.InvoicePrice,
  },
  {
    name: "Status",
    minWidth: "100px",
    selector: (row) => row.Status,
  },
  {
    name: "CreatedAt",
    minWidth: "100px",
    selector: (row) => row.CreatedAt,
  },
  {
    name: "UpdatedAt",
    minWidth: "100px",
    selector: (row) => row.UpdatedAt,
  },
  {
    name: "DeletedAt",
    minWidth: "100px",
    selector: (row) => row.DeletedAt,
  },
  {
    name: "Actions",
    minWidth: "120px",
    maxWidth: "120px",
    selector: (row) => row.uuid,
    cell: (row) => {
      return (
        <Link to={"/admin/invoice/update"}>
          <Button style={{ padding: 6 }} size="sm" color="primary">
            Update
          </Button>
        </Link>
      );
    },
  },
];
