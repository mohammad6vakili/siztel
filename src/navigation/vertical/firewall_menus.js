// ** Icons Import
import { Circle } from "react-feather";
import { BiShieldQuarter } from "react-icons/all";

export default [
  {
    id: "firewall",
    title: "Firewall",
    icon: <BiShieldQuarter size={20} />,
    children: [
      {
        id: "firewalls",
        title: "Firewalls",
        icon: <Circle size={12} />,
        navLink: "/firewalls",
      },
      {
        id: "createFirewall",
        title: "Create Firewall",
        icon: <Circle size={12} />,
        navLink: "/createFirewall",
      },
    ],
  },
];
