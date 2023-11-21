import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const DestinationsUpdate = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="Update Destination"
        data={[{ title: "Update Destination" }]}
      />
    </Fragment>
  );
};
export default DestinationsUpdate;
