import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const AccountsRoot = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Accounts" data={[{ title: "Accounts" }]} />
    </Fragment>
  );
};
export default AccountsRoot;
