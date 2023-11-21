import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const InvoiceRoot = () => {
  return (
    <Fragment>
      <Breadcrumbs title="Invoice" data={[{ title: "Invoice" }]} />
    </Fragment>
  );
};
export default InvoiceRoot;
