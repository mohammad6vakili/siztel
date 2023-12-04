import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useSharedGroups from "../../../../hooks/use_shared_groups";
import ProgressLoading from "../../../../components/progress_loading/index";
import { Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { columns } from "./datatable/columns";
import DataTable from "react-data-table-component";
import { useSkin } from "@hooks/useSkin";
import Confirm from "../../../../components/confirm";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../../../../redux/shared_groups_slice";

const SharedGroupsRoot = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getSharedGroups, deleteEntity, listData, loadings } =
    useSharedGroups();

  const deleteModal = useSelector((state) => state.sharedGroups.deleteModal);
  const selectedEntity = useSelector(
    (state) => state.sharedGroups.selectedEntity
  );
  const getAllTpIdsLoading = useSelector(
    (state) => state.app.getAllTpIdsLoading
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  useEffect(() => {
    if (selectedTpId) {
      getSharedGroups();
    }
  }, [selectedTpId]);

  return (
    <Fragment>
      <Col className="position-relative" xs={12}>
        <Breadcrumbs
          title="Shared Groups"
          data={[{ title: "Shared Groups" }]}
        />
        <Button
          onClick={() => navigate("/rules/shared_groups/new")}
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
      {!getAllTpIdsLoading && loadings.getSharedGroups ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
      ) : null}
      {/* datatable */}
      {!getAllTpIdsLoading && !loadings.getSharedGroups ? (
        <Fragment>
          <DataTable
            noDataComponent={
              loadings.getSharedGroups ? (
                ""
              ) : (
                <div style={{ margin: "24px 0" }}>No Shared Group Founded!</div>
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
        title={"Are you sure you want to delete this shared group?"}
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
export default SharedGroupsRoot;
