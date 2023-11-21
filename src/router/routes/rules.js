import { lazy } from "react";

const ActionBlandsRoot = lazy(() =>
  import("../../views/rules/action_blands/root/index")
);
const ActionBlandsNew = lazy(() =>
  import("../../views/rules/action_blands/new/index")
);
const ActionBlandsUpdate = lazy(() =>
  import("../../views/rules/action_blands/update/index")
);

const ActionTriggersRoot = lazy(() =>
  import("../../views/rules/action_triggers/root/index")
);
const ActionTriggersNew = lazy(() =>
  import("../../views/rules/action_triggers/new/index")
);
const ActionTriggersUpdate = lazy(() =>
  import("../../views/rules/action_triggers/update/index")
);

const rulesRoutes = [
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
];

export default rulesRoutes;
