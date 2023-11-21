import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const ActionTriggersUpdate = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="Update Action Trigger"
        data={[{ title: "Update Action Trigger" }]}
      />
    </Fragment>
  );
};
export default ActionTriggersUpdate;
