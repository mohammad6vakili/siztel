import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const ActionTriggersNew = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="New Action Trigger"
        data={[{ title: "New Action Trigger" }]}
      />
    </Fragment>
  );
};
export default ActionTriggersNew;
