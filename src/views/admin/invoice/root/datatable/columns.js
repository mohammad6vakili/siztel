import moment from "moment/moment";

export const columns = [
  {
    name: "IMSI",
    minWidth: "100px",
    selector: (row) => row.IMSI,
  },
  {
    name: "StartTime",
    minWidth: "200px",
    selector: (row) => row.StartTime,
    cell: (row) => {
      return moment(row.StartTime).utc().format("YYYY/MM/DD HH:mm:ss");
    },
  },
  {
    name: "EndTime",
    minWidth: "200px",
    selector: (row) => row.EndTime,
    cell: (row) => {
      return moment(row.EndTime).utc().format("YYYY/MM/DD HH:mm:ss");
    },
  },
  {
    name: "InvoicePrice",
    minWidth: "200px",
    selector: (row) => row.InvoicePrice,
  },
  {
    name: "Status",
    minWidth: "200px",
    selector: (row) => row.Status,
  },
  {
    name: "CreatedAt",
    minWidth: "200px",
    selector: (row) => row.CreatedAt,
    cell: (row) => {
      return moment(row.CreatedAt).utc().format("YYYY/MM/DD HH:mm:ss");
    },
  },
];
