import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useRatingPlans from "../../../../hooks/use_rating_plans";
import ProgressLoading from "../../../../components/progress_loading/index";
import { Col, Button } from "reactstrap";
import RatingPlansData from "../../../../data/rating_plans.json";
import { useNavigate } from "react-router-dom";
import { columns } from "./datatable/columns";
import DataTable from "react-data-table-component";
import { useSkin } from "@hooks/useSkin";
import Confirm from "../../../../components/confirm";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../../../../redux/rating_plans_slice";

const RatingPlansRoot = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getRatingPlans, deleteEntity, listData, loadings } = useRatingPlans();

  const deleteModal = useSelector((state) => state.ratingPlans.deleteModal);
  const selectedEntity = useSelector(
    (state) => state.ratingPlans.selectedEntity
  );
  const getAllTpIdsLoading = useSelector(
    (state) => state.app.getAllTpIdsLoading
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  useEffect(() => {
    if (selectedTpId) {
      getRatingPlans();
    }
  }, [selectedTpId]);

  return (
    <Fragment>
      <Col className="position-relative" xs={12}>
        <Breadcrumbs title="Rating Plans" data={[{ title: "Rating Plans" }]} />
        <Button
          onClick={() => navigate("/rules/rating_plans/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Rating Plan
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
      {!getAllTpIdsLoading && loadings.getRatingPlans ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
      ) : null}
      {/* datatable */}
      {!getAllTpIdsLoading && !loadings.getRatingPlans ? (
        <Fragment>
          <DataTable
            noDataComponent={
              loadings.getRatingPlans ? (
                ""
              ) : (
                <div style={{ margin: "24px 0" }}>No Rating Plan Founded!</div>
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
        title={"Are you sure you want to delete this rating plan?"}
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
export default RatingPlansRoot;
