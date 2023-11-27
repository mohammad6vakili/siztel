import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useAccounts from "../../../../hooks/use_accounts";
import { useSkin } from "@hooks/useSkin";
import ProgressLoading from "../../../../components/progress_loading/index";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";
import { ChevronDown } from "react-feather";
import { columns } from "./datatable/columns";
import { Col, Button } from "reactstrap";
import AccountsData from "../../../../data/accounts.json";
import { useNavigate } from "react-router-dom";

const AccountsRoot = () => {
  const navigate = useNavigate();
  const { skin } = useSkin();
  const { loadings, paginates, setPaginates } = useAccounts();

  const handlePagination = (page) => {
    console.log(page);
    // dispatch(setGetSshKeysCurrent(page.selected));
    // getUserSshKeys(page.selected + 1);
  };

  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=""
      nextLabel=""
      forcePage={paginates.current}
      onPageChange={(page) => handlePagination(page)}
      pageCount={paginates.total}
      breakLabel="..."
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextClassName="page-item next-item"
      previousClassName="page-item prev-item"
      containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"
    />
  );

  return (
    <Fragment>
      <Col className="position-relative" xs={12}>
        <Breadcrumbs title="Accounts" data={[{ title: "Accounts" }]} />
        <Button
          onClick={() => navigate("/admin/accounts/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Account
        </Button>
      </Col>
      {/* datatable */}
      <div className="react-dataTable mv_datatable_container">
        {!loadings.getAccounts ? (
          <Fragment>
            <DataTable
              noDataComponent={
                loadings.getAccounts ? (
                  ""
                ) : (
                  <div style={{ margin: "24px 0" }}>No Account Founded!</div>
                )
              }
              noHeader
              pagination
              columns={columns}
              paginationPerPage={10}
              className="react-dataTable"
              style={{ background: "red" }}
              sortIcon={<ChevronDown size={10} />}
              paginationComponent={CustomPagination}
              data={AccountsData}
              theme={skin === "dark" ? "darkTheme" : ""}
            />
          </Fragment>
        ) : null}
        {loadings.getAccounts ? (
          <div className="datatable_loading_cover">
            <ProgressLoading />
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};
export default AccountsRoot;
