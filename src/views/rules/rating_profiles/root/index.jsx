import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useRatingProfiles from "../../../../hooks/use_rating_profiles";
import ProgressLoading from "../../../../components/progress_loading/index";
import { Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { columns } from "./datatable/columns";
import DataTable from "react-data-table-component";
import { useSkin } from "@hooks/useSkin";
import Confirm from "../../../../components/confirm";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../../../../redux/rating_profiles_slice";

const RatingProfilesRoot = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getRatingProfiles, deleteEntity, listData, loadings } =
    useRatingProfiles();

  const deleteModal = useSelector((state) => state.ratingProfiles.deleteModal);
  const selectedEntity = useSelector(
    (state) => state.ratingProfiles.selectedEntity
  );
  const getAllTpIdsLoading = useSelector(
    (state) => state.app.getAllTpIdsLoading
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  useEffect(() => {
    if (selectedTpId) {
      getRatingProfiles();
    }
  }, [selectedTpId]);

  return (
    <Fragment>
      <Col className="position-relative" xs={12}>
        <Breadcrumbs
          title="Rating Profiles"
          data={[{ title: "Rating Profiles" }]}
        />
        <Button
          onClick={() => navigate("/rules/rating_profiles/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Rating Profile
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
      {!getAllTpIdsLoading && loadings.getRatingProfiles ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
      ) : null}
      {/* datatable */}
      {!getAllTpIdsLoading && !loadings.getRatingProfiles ? (
        <Fragment>
          <DataTable
            noDataComponent={
              loadings.getRatingProfiles ? (
                ""
              ) : (
                <div style={{ margin: "24px 0" }}>
                  No Rating Profile Founded!
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
        title={"Are you sure you want to delete this rating profile?"}
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
export default RatingProfilesRoot;
