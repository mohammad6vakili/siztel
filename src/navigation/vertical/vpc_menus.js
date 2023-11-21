// ** Icons Import
import { Circle } from "react-feather";
import { IoIosGitNetwork } from "react-icons/all";

export default [
  {
    id: "vpc",
    title: "VPC",
    icon: <IoIosGitNetwork size={20} />,
    children: [
      {
        id: "vpcList",
        title: "VPC List",
        icon: <Circle size={12} />,
        navLink: "/vpc",
      },
      {
        id: "createVpc",
        title: "Create VPC",
        icon: <Circle size={12} />,
        navLink: "/createVpc",
      },
    ],
  },
];
