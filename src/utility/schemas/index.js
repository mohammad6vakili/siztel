import * as yup from "yup";

export const createActionSchema = yup.object({
  TPid: yup.string().required("The TPid field is required."),
  ID: yup.string().required("The ID field is required."),
});

export const createChargerSchema = yup.object({
  TPid: yup.string().required("The TPid field is required."),
  Tenant: yup.string().required("The Tenant field is required."),
  ID: yup.string().required("The ID field is required."),
  ActivationTime: yup
    .string()
    .required("The ActivationTime field is required."),
  ExpiryTime: yup.string().required("The ExpiryTime field is required."),
  RunID: yup.string().required("The RunID field is required."),
  FilterIDs: yup.array().min(1).required("The FilterIDs field is required."),
  AttributeIDs: yup
    .array()
    .min(1)
    .required("The AttributeIDs field is required."),
});

export const createTimingSchema = yup.object({
  TPid: yup.string().required("The TPid field is required."),
  ID: yup.string().required("The ID field is required."),
  MonthDays: yup.string().required("The MonthDays field is required."),
  Months: yup.string().required("The Months field is required."),
  Time: yup.string().required("The Time field is required."),
  WeekDays: yup.string().required("The WeekDays field is required."),
  Years: yup.string().required("The Years field is required."),
});

export const createDestinationSchema = yup.object({
  TPid: yup.string().required("The TPid field is required."),
  ID: yup.string().required("The ID field is required."),
  Prefixes: yup.array().min(1).required("The Prefixes field is required."),
});

export const createRatingProfileSchema = yup.object({
  TPid: yup.string().required("The TPid field is required."),
  LoadId: yup.string().required("The LoadId field is required."),
  Tenant: yup.string().required("The Tenant field is required."),
  Category: yup.string().required("The Category field is required."),
  Subject: yup.string().required("The Subject field is required."),
});

export const createAccountSchema = yup.object({
  Account: yup.string().required("The Account field is required."),
  Tenant: yup.string().required("The Tenant field is required."),
  ActionPlanIDs: yup
    .object()
    .nullable(false)
    .required("The ActionPlanIDs field is required."),
  ActionTriggerIDs: yup
    .object()
    .nullable(false)
    .required("The ActionTriggerIDs field is required."),
  Balances: yup
    .array()
    .min(1, "You should select a balance.")
    .required("You should select a balance."),
});

export const updateAccountSchema = yup.object({
  Account: yup.string().required("The Account field is required."),
  Tenant: yup.string().required("The Tenant field is required."),
  ActionTriggerIDs: yup
    .object()
    .nullable(false)
    .required("The ActionTriggerIDs field is required."),
  Balances: yup
    .array()
    .min(1, "You should select a balance.")
    .required("You should select a balance."),
});
