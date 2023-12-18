import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useDestinations from "../../../../hooks/use_destionations";
import { useSkin } from "@hooks/useSkin";
import ProgressLoading from "../../../../components/progress_loading/index";
import DataTable from "react-data-table-component";
import { columns } from "./datatable/columns";
import { Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Confirm from "../../../../components/confirm";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../../../../redux/destinations_slice";

const DestinationsRoot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { skin } = useSkin();
  const { getDestinations, deleteEntity, listData, loadings } =
    useDestinations();

  const selectedEntity = useSelector(
    (state) => state.destinations.selectedEntity
  );
  const deleteModal = useSelector((state) => state.destinations.deleteModal);
  const getAllTpIdsLoading = useSelector(
    (state) => state.app.getAllTpIdsLoading
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  useEffect(() => {
    if (selectedTpId) {
      getDestinations();
    }
  }, [selectedTpId]);

  return (
    <Fragment>
      <Col className="position-relative" xs={12}>
        <Breadcrumbs title="Destinations" data={[{ title: "Destinations" }]} />
        <Button
          onClick={() => navigate("/rules/destinations/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Destination
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
        {!getAllTpIdsLoading && loadings.getDestinations ? (
          <div className="datatable_loading_cover">
            <ProgressLoading />
          </div>
        ) : null}
        {/* datatable */}
        {!getAllTpIdsLoading && !loadings.getDestinations ? (
          <Fragment>
            <DataTable
              noDataComponent={
                loadings.getDestinations ? (
                  ""
                ) : (
                  <div style={{ margin: "24px 0" }}>
                    No Destination Founded!
                  </div>
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
      </div>
      {/* delete modal */}
      <Confirm
        visible={deleteModal}
        setVisible={setDeleteModal}
        title={"Are you sure you want to delete this destination?"}
        noAction={() => dispatch(setDeleteModal(false))}
        noColor={"secondary"}
        noTitle={"Cancel"}
        yesLoading={loadings.deleteEntity}
        yesAction={() => deleteEntity(selectedEntity)}
        yesColor={"danger"}
        yesTitle={"Delete"}
        type={"global"}
      />
    </Fragment>
  );
};
export default DestinationsRoot;
