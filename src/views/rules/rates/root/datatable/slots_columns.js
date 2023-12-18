import SlotAction from "../components/slot_action";

export const slots_columns = [
  {
    name: "ConnectFee",
    minWidth: "100px",
    selector: (row) => row.ConnectFee,
  },
  {
    name: "RateUnit",
    minWidth: "100px",
    selector: (row) => row.RateUnit,
  },
  {
    name: "RateIncrement",
    minWidth: "100px",
    selector: (row) => row.RateIncrement,
  },
  {
    name: "GroupIntervalStart",
    minWidth: "100px",
    selector: (row) => row.GroupIntervalStart,
  },
  {
    name: "Rate",
    minWidth: "100px",
    selector: (row) => row.Rate,
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
