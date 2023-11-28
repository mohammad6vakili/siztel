import moment from "moment";
import SlotAction from "../components/slot_action";

export const slots_columns = [
  {
    name: "ID",
    minWidth: "100px",
    selector: (row) => row.ID,
  },
  {
    name: "UniqueID",
    minWidth: "320px",
    selector: (row) => row.UniqueID,
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
    name: "Recurrent",
    minWidth: "100px",
    selector: (row) => row.Recurrent,
    cell: (row) => {
      return JSON.stringify(row.Recurrent);
    },
  },
  {
    name: "MinSleep",
    minWidth: "100px",
    selector: (row) => row.MinSleep,
  },
  {
    name: "ExpirationDate",
    minWidth: "100px",
    selector: (row) => row.ExpirationDate,
    cell: (row) => {
      return moment(row.ExpirationDate).format("YYYY-MM-DD");
    },
  },
  {
    name: "ActivationDate",
    minWidth: "100px",
    selector: (row) => row.ActivationDate,
    cell: (row) => {
      return moment(row.ExpirationDate).format("YYYY-MM-DD");
    },
  },
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
    name: "BalanceDestinationIds",
    minWidth: "180px",
    selector: (row) => row.BalanceDestinationIds,
  },
  {
    name: "BalanceWeight",
    minWidth: "130px",
    selector: (row) => row.BalanceWeight,
  },
  {
    name: "BalanceExpirationDate",
    minWidth: "180px",
    selector: (row) => row.BalanceExpirationDate,
  },
  {
    name: "BalanceTimingTags",
    minWidth: "160px",
    selector: (row) => row.BalanceTimingTags,
  },
  {
    name: "BalanceRatingSubject",
    minWidth: "180px",
    selector: (row) => row.BalanceRatingSubject,
  },
  {
    name: "BalanceCategories",
    minWidth: "150px",
    selector: (row) => row.BalanceCategories,
  },
  {
    name: "BalanceSharedGroups",
    minWidth: "180px",
    selector: (row) => row.BalanceSharedGroups,
  },
  {
    name: "BalanceBlocker",
    minWidth: "130px",
    selector: (row) => row.BalanceBlocker,
  },
  {
    name: "BalanceDisabled",
    minWidth: "140px",
    selector: (row) => row.BalanceDisabled,
  },
  {
    name: "Weight",
    minWidth: "80px",
    selector: (row) => row.Weight,
  },
  {
    name: "ActionsId",
    minWidth: "170px",
    selector: (row) => row.ActionsId,
  },
  {
    name: "MinQueuedItems",
    minWidth: "150px",
    selector: (row) => row.MinQueuedItems,
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
