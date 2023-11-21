import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const RatesNew = () => {
  return (
    <Fragment>
      <Breadcrumbs title="New Rate" data={[{ title: "New Rate" }]} />
    </Fragment>
  );
};
export default RatesNew;
