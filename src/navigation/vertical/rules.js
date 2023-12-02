// ** Icons Import
import { Circle } from "react-feather";
import { AiOutlineAppstore } from "react-icons/ai";

export default [
  {
    id: "rules",
    title: "Rules",
    icon: <AiOutlineAppstore size={20} />,
    children: [
      {
        id: "actions",
        title: "Actions",
        icon: <Circle size={12} />,
        navLink: "/rules/actions",
      },
      {
        id: "actionTriggers",
        title: "Action Triggers",
        icon: <Circle size={12} />,
        navLink: "/rules/action_triggers",
      },
      {
        id: "actionPlans",
        title: "Action Plans",
        icon: <Circle size={12} />,
        navLink: "/rules/action_plans",
      },
      {
        id: "chargers",
        title: "Chargers",
        icon: <Circle size={12} />,
        navLink: "/rules/chargers",
      },
      {
        id: "timing",
        title: "Timing",
        icon: <Circle size={12} />,
        navLink: "/rules/timing",
      },
      {
        id: "destinations",
        title: "Destinations",
        icon: <Circle size={12} />,
        navLink: "/rules/destinations",
      },
      {
        id: "rates",
        title: "Rates",
        icon: <Circle size={12} />,
        navLink: "/rules/rates",
      },
      {
        id: "destinationRates",
        title: "Destination Rates",
        icon: <Circle size={12} />,
        navLink: "/rules/destination_rates",
      },
      {
        id: "ratingPlans",
        title: "Rating Plans",
        icon: <Circle size={12} />,
        navLink: "/rules/rating_plans",
      },
      {
        id: "ratingProfiles",
        title: "Rating Profiles",
        icon: <Circle size={12} />,
        navLink: "/rules/rating_profiles",
      },
      {
        id: "sharedGroups",
        title: "Shared Groups",
        icon: <Circle size={12} />,
        navLink: "rules/shared_groups",
      },
    ],
  },
];
