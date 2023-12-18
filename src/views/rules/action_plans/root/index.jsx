import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useActionPlans from "../../../../hooks/use_action_plans";
import ProgressLoading from "../../../../components/progress_loading/index";
import { Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { columns } from "./datatable/columns";
import DataTable from "react-data-table-component";
import { useSkin } from "@hooks/useSkin";
import Confirm from "../../../../components/confirm";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../../../../redux/action_plans_slice";

const ActionPlansRoot = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getActionPlans, deleteEntity, listData, loadings } = useActionPlans();

  const deleteModal = useSelector((state) => state.actionPlans.deleteModal);
  const selectedEntity = useSelector(
    (state) => state.actionPlans.selectedEntity
  );
  const getAllTpIdsLoading = useSelector(
    (state) => state.app.getAllTpIdsLoading
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  useEffect(() => {
    if (selectedTpId) {
      getActionPlans();
    }
  }, [selectedTpId]);

  return (
    <Fragment>
      <Col className="position-relative" xs={12}>
        <Breadcrumbs title="Action Plans" data={[{ title: "Action Plans" }]} />
        <Button
          onClick={() => navigate("/rules/action_plans/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Action Plan
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
      {!getAllTpIdsLoading && loadings.getActionPlans ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
      ) : null}
      {/* datatable */}
      {!getAllTpIdsLoading && !loadings.getActionPlans ? (
        <Fragment>
          <DataTable
            noDataComponent={
              loadings.getActionPlans ? (
                ""
              ) : (
                <div style={{ margin: "24px 0" }}>No Action Plan Founded!</div>
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
        title={"Are you sure you want to delete this action plan?"}
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
export default ActionPlansRoot;
