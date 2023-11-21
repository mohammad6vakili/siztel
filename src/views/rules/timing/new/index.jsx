import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const TimingNew = () => {
  return (
    <Fragment>
      <Breadcrumbs title="New Timing" data={[{ title: "New Timing" }]} />
    </Fragment>
  );
};
export default TimingNew;
