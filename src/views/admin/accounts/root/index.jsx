import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useAccounts from "../../../../hooks/use_accounts";
import { useSkin } from "@hooks/useSkin";
import ProgressLoading from "../../../../components/progress_loading/index";
import DataTable from "react-data-table-component";
import { columns } from "./datatable/columns";
import { Button, Row, Col, Label, Badge, Card, CardBody } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Filterbar from "./components/filterbar";
import { useDispatch, useSelector } from "react-redux";
import { formatBytes } from "../../../../helper/format_unit";
import moment from "moment";
import {
  setDetailsModal,
  setViewAccountDetail,
} from "../../../../redux/accounts_slice";
import { BALANCE_DATA } from "../../../../constant/balance_data";
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
          <Col xs="12" sm="6" className="pr-0">
            <Card className="mb-1">
              <CardBody className="d-flex align-items-center justify-content-between">
                <div>
                  <Label style={{ fontSize: 12 }}>Account :</Label>{" "}
                  <span style={{ fontWeight: 900, fontSize: 13 }}>
                    {viewAccountDetail?.ID.split(":")[0]}
                  </span>
                </div>
                <Badge color={"primary"}>
                  {viewAccountDetail?.AllowNegative === true
                    ? "Permanent"
                    : "Credit"}
                </Badge>
              </CardBody>
            </Card>
          </Col>
          {/* Tenant */}
          <Col xs="12" sm="6" className="pr-0">
            <Card className="mb-1">
              <CardBody>
                <Label style={{ fontSize: 12 }}>Tenant :</Label>{" "}
                <span style={{ fontWeight: 900, fontSize: 13 }}>
                  {viewAccountDetail?.ID.split(":")[1]}
                </span>
              </CardBody>
            </Card>
          </Col>
          {/* Disabled */}
          <Col xs="12" sm="6" className="pr-0">
            <Card className="mb-2">
              <CardBody>
                <Label style={{ fontSize: 12 }}>Status :</Label>{" "}
                <Badge
                  style={{ fontSize: 13 }}
                  color={
                    viewAccountDetail?.Disabled === true ? "danger" : "success"
                  }
                >
                  {viewAccountDetail?.Disabled === true
                    ? "Disabled"
                    : "Enabled"}
                </Badge>
              </CardBody>
            </Card>
          </Col>
          {/* UpdateTime */}
          <Col xs="12" sm="6" className="pr-0">
            <Card className="mb-2">
              <CardBody>
                <Label style={{ fontSize: 12 }}>UpdateTime :</Label>{" "}
                <span style={{ fontWeight: 900, fontSize: 13 }}>
                  {moment(viewAccountDetail?.UpdateTime)
                    .utc()
                    .format("YYYY/MM/DD HH:mm:ss")}
                </span>
              </CardBody>
            </Card>
          </Col>
          {/* balances */}
          <div className="account_details_cards">
            {/* data */}
            {viewAccountDetail?.BalanceMap
              ? Object.keys(viewAccountDetail?.BalanceMap).map((item) => {
                  if (item) {
                    return (
                      <div
                        style={{
                          width: "100%",
                          minWidth: 180,
                          borderRadius: 8,
                          padding: 8,
                        }}
                        className="border mb-1"
                      >
                        <h5 className="mb-2">{item.replace("*", "")}</h5>
                        {viewAccountDetail?.BalanceMap[item]?.map(
                          (itemInside, i) => {
                            return (
                              <div
                                key={i}
                                className={`${
                                  viewAccountDetail?.BalanceMap[item].length > 1
                                    ? "border-bottom"
                                    : ""
                                } mb-1 pb-1`}
                              >
                                <Col xs="12">
                                  <Label style={{ fontSize: 12 }}>ID :</Label>{" "}
                                  <span
                                    style={{ fontWeight: 900, fontSize: 13 }}
                                  >
                                    {itemInside.ID}
                                  </span>
                                </Col>
                                <Col xs="12">
                                  <Label style={{ fontSize: 12 }}>
                                    Value :
                                  </Label>{" "}
                                  <span
                                    style={{ fontWeight: 900, fontSize: 13 }}
                                  >
                                    {item === "*voice"
                                      ? itemInside.Value / 60000000000 +
                                        " Minutes"
                                      : null}
                                    {item === "*data"
                                      ? formatBytes(itemInside.Value)
                                      : null}
                                    {item === "*monetary"
                                      ? itemInside.Value
                                      : null}
                                  </span>
                                </Col>
                                <Col xs="12">
                                  <Label style={{ fontSize: 12 }}>
                                    ExpireDate :
                                  </Label>{" "}
                                  <span
                                    style={{ fontWeight: 900, fontSize: 13 }}
                                  >
                                    {moment(itemInside.ExpirationDate).format(
                                      "YYYY/MM/DD HH:mm:ss"
                                    )}
                                  </span>
                                </Col>
                              </div>
                            );
                          }
                        )}
                      </div>
                    );
                  }
                })
              : null}
          </div>
        </Row>
      </CustomModal>
    </Fragment>
  );
};
export default AccountsRoot;
