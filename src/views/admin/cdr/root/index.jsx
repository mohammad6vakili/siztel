import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const CdrRoot = () => {
  return (
    <Fragment>
      <Breadcrumbs title="CDR" data={[{ title: "CDR" }]} />
    </Fragment>
  );
};
export default CdrRoot;
