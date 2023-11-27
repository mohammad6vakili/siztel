import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const columns = [
  {
    name: "Account",
    minWidth: "100px",
    selector: (row) => row.Account,
  },
  {
    name: "Tenant",
    minWidth: "100px",
    selector: (row) => row.Tenant,
  },
  {
    name: "ActionPlansOverwrite",
    minWidth: "200px",
    selector: (row) => row.ActionPlansOverwrite,
  },
  {
    name: "ActionTriggerOverwrite",
    minWidth: "200px",
    selector: (row) => row.ActionTriggerOverwrite,
  },
  {
    name: "ReloadScheduler",
    minWidth: "200px",
    selector: (row) => row.ReloadScheduler,
  },
  {
    name: "Actions",
    minWidth: "120px",
    maxWidth: "120px",
    selector: (row) => row.uuid,
    cell: (row) => {
      return (
        <Link to={"/admin/accounts/update"}>
          <Button style={{ padding: 6 }} size="sm" color="primary">
            Update
          </Button>
        </Link>
      );
    },
  },
];
