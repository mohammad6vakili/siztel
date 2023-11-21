import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const AccountsNew = () => {
  return (
    <Fragment>
      <Breadcrumbs title="New Account" data={[{ title: "New Account" }]} />
    </Fragment>
  );
};
export default AccountsNew;
