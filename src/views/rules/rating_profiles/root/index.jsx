import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const RatingProfilesRoot = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="Rating Profiles"
        data={[{ title: "Rating Profiles" }]}
      />
    </Fragment>
  );
};
export default RatingProfilesRoot;
