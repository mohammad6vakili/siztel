import { lazy } from "react";

// accounts
const AccountsRoot = lazy(() =>
  import("../../views/admin/accounts/root/index")
);
const AccountsNew = lazy(() => import("../../views/admin/accounts/new/index"));
const AccountsUpdate = lazy(() =>
  import("../../views/admin/accounts/update/index")
);

// cdr
const CdrRoot = lazy(() => import("../../views/admin/cdr/root/index"));

// invoice
const InvoiceRoot = lazy(() => import("../../views/admin/invoice/root/index"));

const adminRoutes = [
  // accounts
  {
    path: "/admin/accounts",
    element: <AccountsRoot />,
  },
  {
    path: "/admin/accounts/new",
    element: <AccountsNew />,
  },
  {
    path: "/admin/accounts/update",
    element: <AccountsUpdate />,
  },
  // cdr
  {
    path: "/admin/cdr",
    element: <CdrRoot />,
  },

  // invoice
  {
    path: "/admin/invoice",
    element: <InvoiceRoot />,
  },
];

export default adminRoutes;
