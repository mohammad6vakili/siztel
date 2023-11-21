import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const RatingPlansNew = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="New Rating Plan"
        data={[{ title: "New Rating Plan" }]}
      />
    </Fragment>
  );
};
export default RatingPlansNew;
