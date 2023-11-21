import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const ActionsRoot = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Actions" data={[{ title: "Actions" }]} />
    </Fragment>
  );
};
export default ActionsRoot;
