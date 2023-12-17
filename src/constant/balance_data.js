import moment from "moment/moment";

export const BALANCE_DATA = [
  {
    id: 1,
    label: "1Gigabyte Data Monthly",
    value: {
      BalanceType: "*data",
      Value: 104857600000,
      Balance: {
        Uuid: "d282703e-64f2-11ee-8c99-0242ac120002",
        ID: "1G_DATA",
        ExpiryTime: moment().add(1, "months").format("YYYY-MM-DDTHH:mm:ssZ"), // Put time now + 1 month here!!!!
        Weight: 10,
        DestinationIDs: "",
        RatingSubject: "",
        Categories: "data",
        SharedGroups: null,
        TimingIDs: "*any",
        Disabled: false,
        Blocker: true,
      },
      ActionExtraData: null,
      Cdrlog: false,
    },
  },
  {
    id: 2,
    label: "10 Hour Voice Monthly",
    value: {
      BalanceType: "*voice",
      Value: 36000,
      Balance: {
        Uuid: "d282703e-64f2-11ee-8c99-0242ac120002",
        ID: "10HVoice",
        ExpiryTime: moment().add(1, "months").format("YYYY-MM-DDTHH:mm:ssZ"), // Put time now + 1 month here!!!!
        Weight: 10,
        DestinationIDs: "",
        RatingSubject: "",
        Categories: "voice",
        SharedGroups: null,
        TimingIDs: "*any",
        Disabled: false,
        Blocker: true,
      },
      ActionExtraData: null,
      Cdrlog: false,
    },
  },
  {
    id: 3,
    label: "100000 Unit Monetary",
    value: {
      BalanceType: "*monetary",
      Value: 100000,
      Balance: {
        Uuid: "d282703e-64f2-11ee-8c99-0242ac120003",
        ID: "100KMoney",
        ExpiryTime: moment().add(1, "months").format("YYYY-MM-DDTHH:mm:ssZ"), // Put time now + 1 month here!!!!
        Weight: 10,
        DestinationIDs: "",
        RatingSubject: "",
        Categories: null,
        SharedGroups: null,
        TimingIDs: "*any",
        Disabled: false,
        Blocker: true,
      },
      ActionExtraData: null,
      Cdrlog: false,
    },
  },
];
