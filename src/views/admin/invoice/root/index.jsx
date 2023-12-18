import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useInvoice from "../../../../hooks/use_invoice";
import { useSkin } from "@hooks/useSkin";
import ProgressLoading from "../../../../components/progress_loading/index";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import { columns } from "./datatable/columns";
import InvoiceData from "../../../../data/invoice.json";

const InvoiceRoot = () => {
  const { skin } = useSkin();
  const { getInvoices, invoiceList, loadings, filters, setFilters } =
    useInvoice();

  useEffect(() => {
    getInvoices();
  }, []);

  return (
    <Fragment>
      <Breadcrumbs title="Invoice" data={[{ title: "Invoice" }]} />
      {/* datatable */}
      <div className="react-dataTable mv_datatable_container">
        {!loadings.getInvoices ? (
          <Fragment>
            <DataTable
              noDataComponent={
                loadings.getInvoices ? (
                  ""
                ) : (
                  <div style={{ margin: "24px 0" }}>No Invoice Founded!</div>
                )
              }
              noHeader
              columns={columns}
              className="react-dataTable"
              style={{ background: "red" }}
              sortIcon={<ChevronDown size={10} />}
              data={invoiceList}
              theme={skin === "dark" ? "darkTheme" : ""}
            />
          </Fragment>
        ) : null}
        {loadings.getInvoices ? (
          <div className="datatable_loading_cover">
            <ProgressLoading />
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};
export default InvoiceRoot;
