import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useAccounts from "../../../../hooks/use_accounts";
import { useSkin } from "@hooks/useSkin";
import ProgressLoading from "../../../../components/progress_loading/index";
import DataTable from "react-data-table-component";
import { columns } from "./datatable/columns";
import { Button, Row, Col, Label, Badge } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Filterbar from "./components/filterbar";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import {
  setDetailsModal,
  setViewAccountDetail,
} from "../../../../redux/accounts_slice";
import CustomModal from "../../../../components/modal";

const AccountsRoot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { skin } = useSkin();
  const { getAccounts, listData, loadings, filters, setFilters } =
    useAccounts();

  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const viewAccountDetail = useSelector(
    (state) => state.accounts.viewAccountDetail
  );
  const detailsModal = useSelector((state) => state.accounts.detailsModal);

  useEffect(() => {
    if (selectedTpId) {
      getAccounts();
    }
  }, [selectedTpId]);

  useEffect(() => {
    if (detailsModal) {
      dispatch(setViewAccountDetail(null));
    }
  }, [detailsModal]);

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
        size={"lg"}
        visible={detailsModal}
        setVisible={setDetailsModal}
        title={"Account Details"}
        type={"global"}
      >
        <Row>
          {/* Account */}
          <Col xs="12" sm="6" className="mb-2 pr-0">
            <Label style={{ fontSize: 12 }}>Account :</Label>{" "}
            <span style={{ fontWeight: 900, fontSize: 13 }}>0059</span>
            <Badge style={{ marginLeft: 5 }} color={"primary"}>
              {viewAccountDetail?.AllowNegative === true
                ? "Permanent"
                : "Credit"}
            </Badge>
          </Col>
          {/* Tenant */}
          <Col xs="12" sm="6" className="mb-2 pr-0">
            <Label style={{ fontSize: 12 }}>Tenant :</Label>{" "}
            <span style={{ fontWeight: 900, fontSize: 13 }}>cgrates.com</span>
          </Col>
          {/* Disabled */}
          <Col xs="12" sm="6" className="mb-2 pr-0">
            <Label style={{ fontSize: 12 }}>Status :</Label>{" "}
            <Badge
              style={{ fontSize: 13 }}
              color={
                viewAccountDetail?.Disabled === true ? "danger" : "success"
              }
            >
              {viewAccountDetail?.Disabled === true ? "Disabled" : "Enabled"}
            </Badge>
          </Col>
          {/* UpdateTime */}
          <Col xs="12" sm="6" className="mb-2 pr-0">
            <Label style={{ fontSize: 12 }}>UpdateTime :</Label>{" "}
            <span style={{ fontWeight: 900, fontSize: 13 }}>
              {moment(viewAccountDetail?.UpdateTime)
                .utc()
                .format("YYYY/MM/DD HH:mm:ss")}
            </span>
          </Col>
          {/* balances */}
          <div className="d-flex justify-content-between">
            {viewAccountDetail?.BalanceMap
              ? Object.keys(viewAccountDetail?.BalanceMap).map(
                  (balance, index) => (
                    <div
                      style={{ width: "48.5%", borderRadius: 8, padding: 8 }}
                      key={index}
                      className="border"
                    >
                      <h5 className="mb-1">{balance.replace("*", "")}</h5>
                      {/* ID */}
                      <Col xs="12">
                        <Label style={{ fontSize: 12 }}>ID :</Label>{" "}
                        <span style={{ fontWeight: 900, fontSize: 13 }}>
                          {viewAccountDetail?.BalanceMap[balance][0]?.ID}
                        </span>
                      </Col>
                      {/* Value */}
                      <Col xs="12">
                        <Label style={{ fontSize: 12 }}>Value :</Label>{" "}
                        <span style={{ fontWeight: 900, fontSize: 13 }}>
                          {viewAccountDetail?.BalanceMap[balance][0]?.Value}
                        </span>
                      </Col>
                      {/* ExpirationDate */}
                      <Col xs="12">
                        <Label style={{ fontSize: 12 }}>ExpirationDate :</Label>{" "}
                        <span style={{ fontWeight: 900, fontSize: 13 }}>
                          {moment(
                            viewAccountDetail?.BalanceMap[balance][0]
                              ?.ExpirationDate
                          )
                            .utc()
                            .format("YYYY/MM/DD HH:mm:ss")}
                        </span>
                      </Col>
                    </div>
                  )
                )
              : null}
          </div>
        </Row>
      </CustomModal>
    </Fragment>
  );
};
export default AccountsRoot;
