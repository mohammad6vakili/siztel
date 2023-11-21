import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const ActionBlandsNew = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="New Action Bland"
        data={[{ title: "New Action Bland" }]}
      />
    </Fragment>
  );
};
export default ActionBlandsNew;
