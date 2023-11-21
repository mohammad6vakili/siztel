import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const SharedGroupsNew = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="New Shared Group"
        data={[{ title: "New Shared Group" }]}
      />
    </Fragment>
  );
};
export default SharedGroupsNew;
