import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const ActionPlansUpdate = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="Update Action Plan"
        data={[{ title: "Update Action Plan" }]}
      />
    </Fragment>
  );
};
export default ActionPlansUpdate;
