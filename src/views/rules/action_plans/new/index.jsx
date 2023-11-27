import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const ActionPlansNew = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="New Action Plan"
        data={[{ title: "New Action Plan" }]}
      />
    </Fragment>
  );
};
export default ActionPlansNew;
