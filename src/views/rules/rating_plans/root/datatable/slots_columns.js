import SlotAction from "../components/slot_action";

export const slots_columns = [
  {
    name: "DestinationRatesId",
    minWidth: "100px",
    selector: (row) => row.DestinationRatesId,
  },
  {
    name: "TimingId",
    minWidth: "100px",
    selector: (row) => row.TimingId,
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
    selector: (row) => row.id,
    cell: (row) => {
      return <SlotAction id={row.id} />;
    },
  },
];
