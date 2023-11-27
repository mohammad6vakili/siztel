import { Button } from "reactstrap";
import { Link } from "react-router-dom";

export const columns = [
  {
    name: "CGRID",
    minWidth: "100px",
    selector: (row) => row.CGRID,
  },
  {
    name: "RunID",
    minWidth: "100px",
    selector: (row) => row.RunID,
  },
  {
    name: "RunID",
    minWidth: "100px",
    selector: (row) => row.RunID,
  },
  {
    name: "ToR",
    minWidth: "100px",
    selector: (row) => row.ToR,
  },
  {
    name: "RequestType",
    minWidth: "120px",
    selector: (row) => row.RequestType,
  },
  {
    name: "Tenant",
    minWidth: "100px",
    selector: (row) => row.Tenant,
  },
  {
    name: "Category",
    minWidth: "100px",
    selector: (row) => row.Category,
  },
  {
    name: "Subject",
    minWidth: "100px",
    selector: (row) => row.Subject,
  },
  {
    name: "SetupTime",
    minWidth: "120px",
    selector: (row) => row.SetupTime,
  },
  {
    name: "AnswerTime",
    minWidth: "120px",
    selector: (row) => row.AnswerTime,
  },
  {
    name: "Usage",
    minWidth: "100px",
    selector: (row) => row.Usage,
  },
  {
    name: "Cost",
    minWidth: "100px",
    selector: (row) => row.Cost,
  },
  {
    name: "AuthApplicationId",
    minWidth: "150px",
    selector: (row) => row.AuthApplicationId,
  },
  {
    name: "IMEI",
    minWidth: "160px",
    selector: (row) => row.IMEI,
  },
];
