// ** Icons Import
import { Circle } from "react-feather";
import { BsKey } from "react-icons/all";

export default [
  {
    id: "SSHKeys",
    title: "SSH Keys",
    icon: <BsKey size={20} />,
    children: [
      {
        id: "sshKeys",
        title: "SSH Keys",
        icon: <Circle size={20} />,
        navLink: "/sshKeys",
      },
      {
        id: "createSshKey",
        title: "Create SSH Key",
        icon: <Circle size={12} />,
        navLink: "/createSshKey",
      },
    ],
  },
];
