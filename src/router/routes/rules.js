import { lazy } from "react";

// action_blands
const ActionBlandsRoot = lazy(() =>
  import("../../views/rules/action_blands/root/index")
);
const ActionBlandsNew = lazy(() =>
  import("../../views/rules/action_blands/new/index")
);
const ActionBlandsUpdate = lazy(() =>
  import("../../views/rules/action_blands/update/index")
);
// action_triggers
const ActionTriggersRoot = lazy(() =>
  import("../../views/rules/action_triggers/root/index")
);
const ActionTriggersNew = lazy(() =>
  import("../../views/rules/action_triggers/new/index")
);
const ActionTriggersUpdate = lazy(() =>
  import("../../views/rules/action_triggers/update/index")
);
// actions
const ActionsRoot = lazy(() => import("../../views/rules/actions/root/index"));
const ActionsNew = lazy(() => import("../../views/rules/actions/new/index"));
const ActionsUpdate = lazy(() =>
  import("../../views/rules/actions/update/index")
);
// chargers
const ChargersRoot = lazy(() =>
  import("../../views/rules/chargers/root/index")
);
const ChargersNew = lazy(() => import("../../views/rules/chargers/new/index"));
const ChargersUpdate = lazy(() =>
  import("../../views/rules/chargers/update/index")
);

// destination_rates
const DestinationRatesRoot = lazy(() =>
  import("../../views/rules/destination_rates/root/index")
);
const DestinationRatesNew = lazy(() =>
  import("../../views/rules/destination_rates/new/index")
);
const DestinationRatesUpdate = lazy(() =>
  import("../../views/rules/destination_rates/update/index")
);

// destinations
const DestinationsRoot = lazy(() =>
  import("../../views/rules/destinations/root/index")
);
const DestinationsNew = lazy(() =>
  import("../../views/rules/destinations/new/index")
);
const DestinationsUpdate = lazy(() =>
  import("../../views/rules/destinations/update/index")
);

// rates
const RatesRoot = lazy(() => import("../../views/rules/rates/root/index"));
const RatesNew = lazy(() => import("../../views/rules/rates/new/index"));
const RatesUpdate = lazy(() => import("../../views/rules/rates/update/index"));

// rating_plans
const RatingPlansRoot = lazy(() =>
  import("../../views/rules/rating_plans/root/index")
);
const RatingPlansNew = lazy(() =>
  import("../../views/rules/rating_plans/new/index")
);
const RatingPlansUpdate = lazy(() =>
  import("../../views/rules/rating_plans/update/index")
);

// rating_profiles
const RatingProfilesRoot = lazy(() =>
  import("../../views/rules/rating_profiles/root/index")
);
const RatingProfilesNew = lazy(() =>
  import("../../views/rules/rating_profiles/new/index")
);
const RatingProfilesUpdate = lazy(() =>
  import("../../views/rules/rating_profiles/update/index")
);

// shared_groups
const SharedGroupsRoot = lazy(() =>
  import("../../views/rules/shared_groups/root/index")
);
const SharedGroupsNew = lazy(() =>
  import("../../views/rules/shared_groups/new/index")
);
const SharedGroupsUpdate = lazy(() =>
  import("../../views/rules/shared_groups/update/index")
);

const rulesRoutes = [
  // action_blands
  {
    path: "/rules/action_blands",
    element: <ActionBlandsRoot />,
  },
  {
    path: "/rules/action_blands/new",
    element: <ActionBlandsNew />,
  },
  {
    path: "/rules/action_blands/update",
    element: <ActionBlandsUpdate />,
  },
  // action_triggers
  {
    path: "/rules/action_triggers",
    element: <ActionTriggersRoot />,
  },
  {
    path: "/rules/action_triggers/new",
    element: <ActionTriggersNew />,
  },
  {
    path: "/rules/action_triggers/update",
    element: <ActionTriggersUpdate />,
  },
  // actions
  {
    path: "/rules/actions",
    element: <ActionsRoot />,
  },
  {
    path: "/rules/actions/new",
    element: <ActionsNew />,
  },
  {
    path: "/rules/actions/update",
    element: <ActionsUpdate />,
  },
  // chargers
  {
    path: "/rules/chargers",
    element: <ChargersRoot />,
  },
  {
    path: "/rules/chargers/new",
    element: <ChargersNew />,
  },
  {
    path: "/rules/chargers/update",
    element: <ChargersUpdate />,
  },
  // destination_rates
  {
    path: "/rules/destination_rates",
    element: <DestinationRatesRoot />,
  },
  {
    path: "/rules/destination_rates/new",
    element: <DestinationRatesNew />,
  },
  {
    path: "/rules/destination_rates/update",
    element: <DestinationRatesUpdate />,
  },
  // destinations
  {
    path: "/rules/destinations",
    element: <DestinationsRoot />,
  },
  {
    path: "/rules/destinations/new",
    element: <DestinationsNew />,
  },
  {
    path: "/rules/destinations/update",
    element: <DestinationsUpdate />,
  },
  // rates
  {
    path: "/rules/rates",
    element: <RatesRoot />,
  },
  {
    path: "/rules/rates/new",
    element: <RatesNew />,
  },
  {
    path: "/rules/rates/update",
    element: <RatesUpdate />,
  },
  // rating_plans
  {
    path: "/rules/rating_plans",
    element: <RatingPlansRoot />,
  },
  {
    path: "/rules/rating_plans/new",
    element: <RatingPlansNew />,
  },
  {
    path: "/rules/rating_plans/update",
    element: <RatingPlansUpdate />,
  },
  // rating_profiles
  {
    path: "/rules/rating_profiles",
    element: <RatingProfilesRoot />,
  },
  {
    path: "/rules/rating_profiles/new",
    element: <RatingProfilesNew />,
  },
  {
    path: "/rules/rating_profiles/update",
    element: <RatingProfilesUpdate />,
  },
  // shared_groups
  {
    path: "/rules/shared_groups",
    element: <SharedGroupsRoot />,
  },
  {
    path: "/rules/shared_groups/new",
    element: <SharedGroupsNew />,
  },
  {
    path: "/rules/shared_groups/update",
    element: <SharedGroupsUpdate />,
  },
];

export default rulesRoutes;
