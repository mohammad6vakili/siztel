export const columns = [
  {
    name: "DestinationId",
    minWidth: "100px",
    selector: (row) => row.DestinationId,
  },
  {
    name: "RateId",
    minWidth: "100px",
    selector: (row) => row.RateId,
  },
  {
    name: "RoundingMethod",
    minWidth: "100px",
    selector: (row) => row.RoundingMethod,
  },
  {
    name: "RoundingDecimals",
    minWidth: "100px",
    selector: (row) => row.RoundingDecimals,
  },
  {
    name: "MaxCost",
    minWidth: "100px",
    selector: (row) => row.MaxCost,
  },
  {
    name: "MaxCostStrategy",
    minWidth: "100px",
    selector: (row) => row.MaxCostStrategy,
  },
];
