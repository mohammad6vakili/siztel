import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";

const InvoiceUpdate = () => {
  return (
    <Fragment>
      <Breadcrumbs
        title="Update Invoice"
        data={[{ title: "Update Invoice" }]}
      />
    </Fragment>
  );
};
export default InvoiceUpdate;
