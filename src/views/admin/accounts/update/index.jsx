import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const AccountsUpdate = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="Update Account"
        data={[{ title: "Update Account" }]}
      />
    </Fragment>
  );
};
export default AccountsUpdate;
