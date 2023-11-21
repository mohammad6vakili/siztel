import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const InvoiceNew = () => {
  return (
    <Fragment>
      <Breadcrumbs title="New Invoice" data={[{ title: "New Invoice" }]} />
    </Fragment>
  );
};
export default InvoiceNew;
