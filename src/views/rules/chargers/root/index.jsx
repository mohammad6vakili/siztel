import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const ChargersRoot = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Chargers" data={[{ title: "Chargers" }]} />
    </Fragment>
  );
};
export default ChargersRoot;
