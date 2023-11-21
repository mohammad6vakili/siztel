import { lazy } from "react";

const AccountsRoot = lazy(() =>
  import("../../views/admin/accounts/root/index")
);

// const SshKeys = lazy(() => import("../../views/ssh_keys/root"));
// const CreateSshKey = lazy(() => import("../../views/ssh_keys/create"));

const adminRoutes = [
  {
    path: "/admin/accounts",
    element: <AccountsRoot />,
  },
  //   {
  //     path: "/admin/accounts/new",
  //     element: <CreateSshKey />,
  //   },
  //   {
  //     path: "/admin/accounts/update",
  //     element: <CreateSshKey />,
  //   },
];

export default adminRoutes;
