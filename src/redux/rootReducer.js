// ** Reducers Imports
import navbar from "./navbar";
import layout from "./layout";
import auth from "./authentication";
import todo from "@src/views/apps/todo/store";
import chat from "@src/views/apps/chat/store";
import users from "@src/views/apps/user/store";
import email from "@src/views/apps/email/store";
// import invoice from "@src/views/apps/invoice/store";
import calendar from "@src/views/apps/calendar/store";
import ecommerce from "@src/views/apps/ecommerce/store";
import dataTables from "@src/views/tables/data-tables/store";
import permissions from "@src/views/apps/roles-permissions/store";
import rates from "./rates_slice";
import destinationRates from "./destination_rates_slice";
import ratingPlans from "./rating_plans_slice";
import ratingProfiles from "./rating_profiles_slice";
import sharedGroups from "./shared_groups_slice";
import actions from "./actions_slice";
import actionTriggers from "./action_triggers_slice";
import invoice from "./invoice_slice";
import cdr from "./cdr_slice";
import actionPlans from "./action_plans_slice";
import chargers from "./chargers_slice";
import timing from "./timing_slice";
import accounts from "./accounts_slice";
import destinations from "./destinations_slice";
import app from "./app_slice";

const rootReducer = {
  auth,
  todo,
  chat,
  email,
  users,
  navbar,
  layout,
  // invoice,
  calendar,
  ecommerce,
  dataTables,
  permissions,
  rates,
  destinationRates,
  ratingPlans,
  ratingProfiles,
  sharedGroups,
  actions,
  actionTriggers,
  invoice,
  cdr,
  actionPlans,
  chargers,
  timing,
  accounts,
  destinations,
  app,
};

export default rootReducer;
