import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const CdrNew = () => {
  return (
    <Fragment>
      <Breadcrumbs title="New CDR" data={[{ title: "New CDR" }]} />
    </Fragment>
  );
};
export default CdrNew;
