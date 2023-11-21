import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const DestinationsRoot = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Destinations" data={[{ title: "Destinations" }]} />
    </Fragment>
  );
};
export default DestinationsRoot;
