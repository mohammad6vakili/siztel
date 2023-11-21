import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const RatesRoot = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Rates" data={[{ title: "Rates" }]} />
    </Fragment>
  );
};
export default RatesRoot;
