import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useAccounts from "../../../../hooks/use_accounts";
import { useSkin } from "@hooks/useSkin";
import ProgressLoading from "../../../../components/progress_loading/index";
import DataTable from "react-data-table-component";
import { columns } from "./datatable/columns";
import { Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Filterbar from "./components/filterbar";
import { useDispatch, useSelector } from "react-redux";
import Confirm from "../../../../components/confirm";
import { setDetailsModal } from "../../../../redux/accounts_slice";
import CustomModal from "../../../../components/modal";

const AccountsRoot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { skin } = useSkin();
  const { getAccounts, listData, loadings, filters, setFilters } =
    useAccounts();

  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const selectedEntity = useSelector((state) => state.accounts.selectedEntity);
  const detailsModal = useSelector((state) => state.accounts.detailsModal);

  useEffect(() => {
    if (selectedTpId) {
      getAccounts();
    }
  }, [selectedTpId]);

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
      <Filterbar
        filters={filters}
        setFilters={setFilters}
        getAccounts={getAccounts}
      />
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
              columns={columns}
              className="react-dataTable"
              style={{ background: "red" }}
              data={listData}
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
      {/* details modal */}
      <CustomModal
        visible={detailsModal}
        setVisible={setDetailsModal}
        title={"Account Details"}
        type={"global"}
      >
        <div>Hello</div>
      </CustomModal>
    </Fragment>
  );
};
export default AccountsRoot;
