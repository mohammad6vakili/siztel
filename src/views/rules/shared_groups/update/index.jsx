import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const SharedGroupsUpdate = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="Update Shared Group"
        data={[{ title: "Update Shared Group" }]}
      />
    </Fragment>
  );
};
export default SharedGroupsUpdate;
