import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const ActionTriggersRoot = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="Action Triggers"
        data={[{ title: "Action Triggers" }]}
      />
    </Fragment>
  );
};
export default ActionTriggersRoot;
