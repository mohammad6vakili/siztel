import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const ActionPlansRoot = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Action Plans" data={[{ title: "Action Plans" }]} />
    </Fragment>
  );
};
export default ActionPlansRoot;
