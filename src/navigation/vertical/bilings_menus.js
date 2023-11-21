// ** Icons Import
import { BsCreditCard } from "react-icons/all";
import { Circle } from "react-feather";

export default [
  {
    id: "bilings",
    title: "Bilings",
    icon: <BsCreditCard size={20} />,
    children: [
      {
        id: "payments",
        title: "Payments",
        icon: <Circle size={20} />,
        navLink: "/payments",
      },
      {
        id: "transactions",
        title: "Transactions",
        icon: <Circle size={12} />,
        navLink: "/transactions",
      },
      {
        id: "earnings",
        title: "Earnings",
        icon: <Circle size={12} />,
        navLink: "/earnings",
      },
    ],
  },
];
