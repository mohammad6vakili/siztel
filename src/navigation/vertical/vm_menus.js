// ** Icons Import
import { Circle } from "react-feather";
import { BsHddNetwork } from "react-icons/all";

export default [
  {
    id: "vm",
    title: "VM",
    icon: <BsHddNetwork size={20} />,
    children: [
      {
        id: "vmList",
        title: "VM List",
        icon: <Circle size={12} />,
        navLink: "/vm",
      },
      {
        id: "createVm",
        title: "Create VM",
        icon: <Circle size={12} />,
        navLink: "/createVm",
      },
    ],
  },
];
