import { Fragment, useEffect } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useActions from "../../../../hooks/use_actions";
import ProgressLoading from "../../../../components/progress_loading/index";
import { Col, Button } from "reactstrap";
import { useSkin } from "@hooks/useSkin";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import { columns } from "./datatable/columns";
import Confirm from "../../../../components/confirm/index";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../../../../redux/actions_slice";

const ActionsRoot = () => {
  const { skin } = useSkin();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getActions, listData, loadings } = useActions();

  const selectedEntity = useSelector((state) => state.actions.selectedEntity);
  const deleteModal = useSelector((state) => state.actions.deleteModal);
  const getAllTpIdsLoading = useSelector(
    (state) => state.app.getAllTpIdsLoading
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  useEffect(() => {
    if (selectedTpId) {
      getActions();
    }
  }, [selectedTpId]);

  return (
    <Fragment>
      <Col className="position-relative" xs={12}>
        <Breadcrumbs title="Actions" data={[{ title: "Actions" }]} />
        <Button
          onClick={() => navigate("/rules/actions/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Action
        </Button>
      </Col>
      {getAllTpIdsLoading ? (
        <div
          style={{ width: "100%", height: "50vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          Loading TPIds...
        </div>
      ) : null}
      {/* table loading */}
      {!getAllTpIdsLoading && loadings.getActions ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
      ) : null}
      {!getAllTpIdsLoading && !loadings.getActions ? (
        <Fragment>
          <DataTable
            noDataComponent={
              loadings.getActions ? (
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
        title={"Are you sure you want to delete this action?"}
        noAction={() => dispatch(setDeleteModal(false))}
        noColor={"secondary"}
        noTitle={"Cancel"}
        yesLoading={loadings.deleteAction}
        yesAction={() => alert(selectedEntity)}
        yesColor={"danger"}
        yesTitle={"Delete"}
        type={"global"}
      />
    </Fragment>
  );
};
export default ActionsRoot;
