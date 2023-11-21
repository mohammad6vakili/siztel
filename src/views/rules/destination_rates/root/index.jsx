import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const DestinationRatesRoot = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="Destination Rates"
        data={[{ title: "Destination Rates" }]}
      />
    </Fragment>
  );
};
export default DestinationRatesRoot;
