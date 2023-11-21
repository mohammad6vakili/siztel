import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const DestinationRatesNew = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="New Destination Rate"
        data={[{ title: "New Destination Rate" }]}
      />
    </Fragment>
  );
};
export default DestinationRatesNew;
