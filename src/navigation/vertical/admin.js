// ** Icons Import
import { Circle } from "react-feather";
import { AiOutlineUser } from "react-icons/ai";

export default [
  {
    id: "admin",
    title: "Admin",
    icon: <AiOutlineUser size={20} />,
    children: [
      {
        id: "accounts",
        title: "Accounts",
        icon: <Circle size={12} />,
        navLink: "/admin/accounts",
      },
      {
        id: "cdr",
        title: "CDR",
        icon: <Circle size={12} />,
        navLink: "/admin/cdr",
      },
      {
        id: "invoice",
        title: "Invoice",
        icon: <Circle size={12} />,
        navLink: "/admin/invoice",
      },
    ],
  },
];
