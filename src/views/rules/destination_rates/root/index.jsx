import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useDestinationRates from "../../../../hooks/use_destination_rates";
import ProgressLoading from "../../../../components/progress_loading/index";
import { Col, Button } from "reactstrap";
import DestinationRatesData from "../../../../data/destination_rates.json";
import { useNavigate } from "react-router-dom";
import { columns } from "./datatable/columns";
import DataTable from "react-data-table-component";
import { useSkin } from "@hooks/useSkin";
import Confirm from "../../../../components/confirm";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../../../../redux/destination_rates_slice";

const DestinationRatesRoot = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getDestinationRates, deleteEntity, listData, loadings } =
    useDestinationRates();

  const deleteModal = useSelector(
    (state) => state.destinationRates.deleteModal
  );
  const selectedEntity = useSelector(
    (state) => state.destinationRates.selectedEntity
  );
  const getAllTpIdsLoading = useSelector(
    (state) => state.app.getAllTpIdsLoading
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  useEffect(() => {
    if (selectedTpId) {
      getDestinationRates();
    }
  }, [selectedTpId]);

  return (
    <Fragment>
      <Col className="position-relative" xs={12}>
        <Breadcrumbs
          title="Destination Rates"
          data={[{ title: "Destination Rates" }]}
        />
        <Button
          onClick={() => navigate("/rules/destination_rates/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Destination Rate
        </Button>
      </Col>
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
      {!getAllTpIdsLoading && loadings.getDestinationRates ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
      ) : null}
      {/* datatable */}
      {!getAllTpIdsLoading && !loadings.getDestinationRates ? (
        <Fragment>
          <DataTable
            noDataComponent={
              loadings.getDestinationRates ? (
                ""
              ) : (
                <div style={{ margin: "24px 0" }}>
                  No Destination Rate Founded!
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
      {/* delete modal */}
      <Confirm
        visible={deleteModal}
        setVisible={setDeleteModal}
        title={"Are you sure you want to delete this detination rate?"}
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
export default DestinationRatesRoot;
