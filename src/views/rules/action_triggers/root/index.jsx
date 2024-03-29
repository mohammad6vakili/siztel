import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useActionTriggers from "../../../../hooks/use_action_triggers";
import ProgressLoading from "../../../../components/progress_loading/index";
import { Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { columns } from "./datatable/columns";
import { useSkin } from "@hooks/useSkin";
import Confirm from "../../../../components/confirm";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../../../../redux/action_triggers_slice";

const ActionTriggersRoot = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { getActionTriggers, deleteEntity, listData, loadings } =
    useActionTriggers();

  const deleteModal = useSelector((state) => state.actionTriggers.deleteModal);
  const selectedEntity = useSelector(
    (state) => state.actionTriggers.selectedEntity
  );
  const getAllTpIdsLoading = useSelector(
    (state) => state.app.getAllTpIdsLoading
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  useEffect(() => {
    if (selectedTpId) {
      getActionTriggers();
    }
  }, [selectedTpId]);

  return (
    <Fragment>
      <Col className="position-relative" xs={12}>
        <Breadcrumbs
          title="Action Triggers"
          data={[{ title: "Action Triggers" }]}
        />
        <Button
          onClick={() => navigate("/rules/action_triggers/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Action Trigger
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
      {!getAllTpIdsLoading && loadings.getActionTriggers ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
      ) : null}
      {/* datatable */}
      {!getAllTpIdsLoading && !loadings.getActionTriggers ? (
        <Fragment>
          <DataTable
            noDataComponent={
              loadings.getActionTriggers ? (
                ""
              ) : (
                <div style={{ margin: "24px 0" }}>
                  No Action Trigger Founded!
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
        title={"Are you sure you want to delete this action trigger?"}
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
export default ActionTriggersRoot;
