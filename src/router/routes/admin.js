import { lazy } from "react";

const AccountsRoot = lazy(() =>
  import("../../views/admin/accounts/root/index")
);
const AccountsNew = lazy(() => import("../../views/admin/accounts/new/index"));
const AccountsUpdate = lazy(() =>
  import("../../views/admin/accounts/update/index")
);

const CdrRoot = lazy(() => import("../../views/admin/cdr/root/index"));
const CdrNew = lazy(() => import("../../views/admin/cdr/new/index"));
const CdrUpdate = lazy(() => import("../../views/admin/cdr/update/index"));

const InvoiceRoot = lazy(() => import("../../views/admin/invoice/root/index"));
const InvoiceNew = lazy(() => import("../../views/admin/invoice/new/index"));
const InvoiceUpdate = lazy(() =>
  import("../../views/admin/invoice/update/index")
);

const adminRoutes = [
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
  {
    path: "/admin/cdr",
    element: <CdrRoot />,
  },
  {
    path: "/admin/cdr/new",
    element: <CdrNew />,
  },
  {
    path: "/admin/cdr/update",
    element: <CdrUpdate />,
  },
  {
    path: "/admin/invoice",
    element: <InvoiceRoot />,
  },
  {
    path: "/admin/invoice/new",
    element: <InvoiceNew />,
  },
  {
    path: "/admin/invoice/update",
    element: <InvoiceUpdate />,
  },
];

export default adminRoutes;
