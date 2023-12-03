import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useChargers from "../../../../hooks/use_chargers";
import { useSkin } from "@hooks/useSkin";
import ProgressLoading from "../../../../components/progress_loading/index";
import DataTable from "react-data-table-component";
import { columns } from "./datatable/columns";
import { Col, Button } from "reactstrap";
import ChargersData from "../../../../data/chargers.json";
import { useNavigate } from "react-router-dom";
import Confirm from "../../../../components/confirm";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../../../../redux/chargers_slice";

const ChargersRoot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { skin } = useSkin();
  const { getChargers, deleteEntity, listData, loadings } = useChargers();

  const deleteModal = useSelector((state) => state.chargers.deleteModal);
  const selectedEntity = useSelector((state) => state.chargers.selectedEntity);
  const getAllTpIdsLoading = useSelector(
    (state) => state.app.getAllTpIdsLoading
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  useEffect(() => {
    if (selectedTpId) {
      getChargers();
    }
  }, [selectedTpId]);

  return (
    <Fragment>
      <Col className="position-relative" xs={12}>
        <Breadcrumbs title="Chargers" data={[{ title: "Chargers" }]} />
        <Button
          onClick={() => navigate("/rules/chargers/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Charger
        </Button>
      </Col>
      {/* datatable */}
      <div className="react-dataTable mv_datatable_container">
        {/* tpids loading */}
        {getAllTpIdsLoading ? (
          <div
            style={{ width: "100%", height: "50vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            Loading TPIds...
          </div>
        ) : null}
        {/* table loading */}
        {!getAllTpIdsLoading && loadings.getChargers ? (
          <div className="datatable_loading_cover">
            <ProgressLoading />
          </div>
        ) : null}
        {!getAllTpIdsLoading && !loadings.getChargers ? (
          <Fragment>
            <DataTable
              noDataComponent={
                loadings.getChargers ? (
                  ""
                ) : (
                  <div style={{ margin: "24px 0" }}>No Charger Founded!</div>
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
        {/* delete modal */}
        <Confirm
          visible={deleteModal}
          setVisible={setDeleteModal}
          title={"Are you sure you want to delete this charger?"}
          noAction={() => dispatch(setDeleteModal(false))}
          noColor={"secondary"}
          noTitle={"Cancel"}
          yesLoading={loadings.deleteEntity}
          yesAction={() => deleteEntity(selectedEntity)}
          yesColor={"danger"}
          yesTitle={"Delete"}
          type={"global"}
        />
      </div>
    </Fragment>
  );
};
export default ChargersRoot;
