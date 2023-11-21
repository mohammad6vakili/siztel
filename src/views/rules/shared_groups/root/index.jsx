import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const SharedGroupsRoot = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Shared Groups" data={[{ title: "Shared Groups" }]} />
    </Fragment>
  );
};
export default SharedGroupsRoot;
