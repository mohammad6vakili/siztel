import { Button } from "reactstrap";

export const columns = [
  {
    name: "TimingId",
    minWidth: "100px",
    selector: (row) => row.TimingId,
  },
  {
    name: "Years",
    minWidth: "100px",
    selector: (row) => row.Years,
  },
  {
    name: "Months",
    minWidth: "100px",
    selector: (row) => row.Months,
  },
  {
    name: "MonthDays",
    minWidth: "100px",
    selector: (row) => row.MonthDays,
  },
  {
    name: "WeekDays",
    minWidth: "100px",
    selector: (row) => row.WeekDays,
  },
  {
    name: "Time",
    minWidth: "100px",
    selector: (row) => row.Time,
  },
  {
    name: "Actions",
    minWidth: "120px",
    maxWidth: "120px",
    selector: (row) => row.uuid,
    cell: (row) => {
      return (
        <Button style={{ padding: 6 }} size="sm" color="primary">
          Update
        </Button>
      );
    },
  },
];
