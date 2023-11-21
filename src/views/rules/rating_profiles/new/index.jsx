import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const RatingProfilesNew = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="New Rating Profile"
        data={[{ title: "New Rating Profile" }]}
      />
    </Fragment>
  );
};
export default RatingProfilesNew;
