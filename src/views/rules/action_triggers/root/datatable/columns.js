export const columns = [
  {
    name: "BalanceId",
    minWidth: "100px",
    selector: (row) => row.BalanceId,
  },
  {
    name: "BalanceType",
    minWidth: "100px",
    selector: (row) => row.BalanceType,
  },
  {
    name: "BalanceRatingSubject",
    minWidth: "180px",
    selector: (row) => row.BalanceRatingSubject,
  },
  {
    name: "BalanceCategory",
    minWidth: "140px",
    selector: (row) => row.BalanceCategory,
  },
  {
    name: "BalanceSharedGroup",
    minWidth: "170px",
    selector: (row) => row.BalanceSharedGroup,
  },
  {
    name: "BalanceWeight",
    minWidth: "130px",
    selector: (row) => row.BalanceWeight,
  },
  {
    name: "DestinationId",
    minWidth: "120px",
    selector: (row) => row.DestinationId,
  },
  {
    name: "Direction",
    minWidth: "100px",
    selector: (row) => row.Direction,
  },
  {
    name: "MinQueuedItems",
    minWidth: "150px",
    selector: (row) => row.MinQueuedItems,
  },
  {
    name: "MinSleep",
    minWidth: "100px",
    selector: (row) => row.MinSleep,
  },
  {
    name: "ActionsId",
    minWidth: "120px",
    selector: (row) => row.ActionsId,
  },
  {
    name: "ThresholdType",
    minWidth: "130px",
    selector: (row) => row.ThresholdType,
  },
  {
    name: "ThresholdValue",
    minWidth: "130px",
    selector: (row) => row.ThresholdValue,
  },
  {
    name: "Weight",
    minWidth: "100px",
    selector: (row) => row.Weight,
  },
];
