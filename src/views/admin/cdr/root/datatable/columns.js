import moment from "moment";

export const columns = [
  {
    name: "CGRID",
    minWidth: "350px",
    selector: (row) => row.CGRID,
  },
  {
    name: "RunID",
    minWidth: "120px",
    selector: (row) => row.RunID,
  },
  {
    name: "OrderID",
    minWidth: "80px",
    selector: (row) => row.OrderID,
  },
  {
    name: "OriginHost",
    minWidth: "120px",
    selector: (row) => row.OriginHost,
  },
  {
    name: "Source",
    minWidth: "80px",
    selector: (row) => row.Source,
  },
  {
    name: "OriginID",
    minWidth: "320px",
    selector: (row) => row.OriginID,
  },
  {
    name: "ToR",
    minWidth: "120px",
    selector: (row) => row.ToR,
  },
  {
    name: "RequestType",
    minWidth: "120px",
    selector: (row) => row.RequestType,
  },
  {
    name: "Tenant",
    minWidth: "120px",
    selector: (row) => row.Tenant,
  },
  {
    name: "Category",
    minWidth: "100px",
    selector: (row) => row.Category,
  },
  {
    name: "Account",
    minWidth: "170px",
    selector: (row) => row.Account,
  },
  {
    name: "Subject",
    minWidth: "170px",
    selector: (row) => row.Subject,
  },
  {
    name: "Destination",
    minWidth: "120px",
    selector: (row) => row.Destination,
  },
  {
    name: "SetupTime",
    minWidth: "160px",
    selector: (row) => row.SetupTime,
    cell: (row) => {
      return moment(row.SetupTime).format("YYYY/MM/DD HH:mm:ss");
    },
  },
  {
    name: "AnswerTime",
    minWidth: "160px",
    selector: (row) => row.AnswerTime,
    cell: (row) => {
      return moment(row.AnswerTime).format("YYYY/MM/DD HH:mm:ss");
    },
  },
  {
    name: "Usage",
    minWidth: "100px",
    selector: (row) => row.Usage,
  },
  {
    name: "CostSource",
    minWidth: "120px",
    selector: (row) => row.CostSource,
  },
  {
    name: "Cost",
    minWidth: "130px",
    selector: (row) => row.Cost,
  },
  {
    name: "ExtraInfo",
    minWidth: "100px",
    selector: (row) => row.ExtraInfo,
  },
];
