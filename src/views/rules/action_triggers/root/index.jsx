import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useActionTriggers from "../../../../hooks/use_action_triggers";
import ProgressLoading from "../../../../components/progress_loading/index";
import ReactPaginate from "react-paginate";
import { Col, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import { columns } from "./datatable/columns";
import { useSkin } from "@hooks/useSkin";
import ActionTriggersData from "../../../../data/action_triggers.json";
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
      {!loadings.getActionTriggers ? (
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
      {loadings.getActionTriggers ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
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
