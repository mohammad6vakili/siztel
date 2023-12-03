import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useTiming from "../../../../hooks/use_timing";
import { useSkin } from "@hooks/useSkin";
import ProgressLoading from "../../../../components/progress_loading/index";
import DataTable from "react-data-table-component";
import { columns } from "./datatable/columns";
import { Col, Button } from "reactstrap";
import TimingData from "../../../../data/timing.json";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDeleteModal } from "../../../../redux/timing_slice";
import Confirm from "../../../../components/confirm";

const TimingRoot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { skin } = useSkin();
  const { getTimings, deleteEntity, listData, loadings } = useTiming();

  const deleteModal = useSelector((state) => state.timing.deleteModal);
  const selectedEntity = useSelector((state) => state.timing.selectedEntity);
  const getAllTpIdsLoading = useSelector(
    (state) => state.app.getAllTpIdsLoading
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  useEffect(() => {
    if (selectedTpId) {
      getTimings();
    }
  }, [selectedTpId]);

  return (
    <Fragment>
      <Col className="position-relative" xs={12}>
        <Breadcrumbs title="Timing" data={[{ title: "Timing" }]} />
        <Button
          onClick={() => navigate("/rules/timing/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Timing
        </Button>
      </Col>
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
        {!getAllTpIdsLoading && loadings.getTimings ? (
          <div className="datatable_loading_cover">
            <ProgressLoading />
          </div>
        ) : null}
        {/* datatable */}
        {!getAllTpIdsLoading && !loadings.getTimings ? (
          <Fragment>
            <DataTable
              noDataComponent={
                loadings.getTimings ? (
                  ""
                ) : (
                  <div style={{ margin: "24px 0" }}>No Timing Founded!</div>
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
          title={"Are you sure you want to delete this timing?"}
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
export default TimingRoot;
