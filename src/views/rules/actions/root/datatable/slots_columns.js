import SlotAction from "../components/slot_action";

export const slots_columns = [
  {
    name: "Identifier",
    minWidth: "100px",
    selector: (row) => row.Identifier,
  },
  {
    name: "BalanceId",
    minWidth: "100px",
    selector: (row) => row.BalanceId,
  },
  {
    name: "BalanceType",
    minWidth: "120px",
    selector: (row) => row.BalanceType,
  },
  {
    name: "Units",
    minWidth: "100px",
    selector: (row) => row.Units,
  },
  {
    name: "ExpiryTime",
    minWidth: "120px",
    selector: (row) => row.ExpiryTime,
  },
  {
    name: "Filter",
    minWidth: "100px",
    selector: (row) => row.Filter,
  },
  {
    name: "TimingTags",
    minWidth: "120px",
    selector: (row) => row.TimingTags,
  },
  {
    name: "DestinationIds",
    minWidth: "140px",
    selector: (row) => row.DestinationIds,
  },
  {
    name: "RatingSubject",
    minWidth: "130px",
    selector: (row) => row.RatingSubject,
  },
  {
    name: "Categories",
    minWidth: "100px",
    selector: (row) => row.Categories,
  },
  {
    name: "SharedGroups",
    minWidth: "130px",
    selector: (row) => row.SharedGroups,
  },
  {
    name: "BalanceWeight",
    minWidth: "130px",
    selector: (row) => row.BalanceWeight,
  },
  {
    name: "ExtraParameters",
    minWidth: "140px",
    selector: (row) => row.ExtraParameters,
  },
  {
    name: "BalanceBlocker",
    minWidth: "130px",
    selector: (row) => row.BalanceBlocker,
    cell: (row) => {
      return JSON.stringify(row.BalanceBlocker);
    },
  },
  {
    name: "BalanceDisabled",
    minWidth: "140px",
    selector: (row) => row.BalanceDisabled,
    cell: (row) => {
      return JSON.stringify(row.BalanceDisabled);
    },
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
