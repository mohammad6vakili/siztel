import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const ActionsNew = () => {
  return (
    <Fragment>
      <Breadcrumbs title="New Action" data={[{ title: "New Action" }]} />
    </Fragment>
  );
};
export default ActionsNew;
