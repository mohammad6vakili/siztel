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

// export const registerSchema = yup.object({
//   first_name: yup.string().required("The first name field is required."),
//   last_name: yup.string().required("The last name field is required."),
//   email: yup
//     .string()
//     .required("The email field is required.")
//     .email("The entered email structure is incorrect."),
//   password: yup.string().required("The password field is required."),
//   password_confirmation: yup
//     .string()
//     .required("The repeat password field is required."),
//   privacy: yup.bool().required(""),
// });
