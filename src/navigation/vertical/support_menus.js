// ** Icons Import
import { MdOutlineContactSupport } from "react-icons/all";
import { Circle } from "react-feather";

export default [
  {
    id: "support",
    title: "support",
    icon: <MdOutlineContactSupport size={20} />,
    children: [
      {
        id: "tickets",
        title: "Tickets",
        icon: <Circle size={20} />,
        navLink: "/tickets",
      },
      {
        id: "createTicket",
        title: "Create Ticket",
        icon: <Circle size={12} />,
        navLink: "/createTicket",
      },
    ],
  },
];
