import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const DestinationsNew = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="New Destination"
        data={[{ title: "New Destination" }]}
      />
    </Fragment>
  );
};
export default DestinationsNew;
