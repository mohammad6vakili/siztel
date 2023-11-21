import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const ChargersNew = () => {
  return (
    <Fragment>
      <Breadcrumbs title="New Charger" data={[{ title: "New Charger" }]} />
    </Fragment>
  );
};
export default ChargersNew;
