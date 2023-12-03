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
  const { getActionTriggers, loadings, paginates, setPaginates } =
    useActionTriggers();

  const deleteModal = useSelector((state) => state.actionTriggers.deleteModal);
  const selectedEntity = useSelector(
    (state) => state.actionTriggers.selectedEntity
  );
  const selectedTpId = useSelector((state) => state.app.selectedTpId);

  const handlePagination = (page) => {
    console.log(page);
    // dispatch(setGetSshKeysCurrent(page.selected));
    // getUserSshKeys(page.selected + 1);
  };

  const CustomPagination = () => (
    <ReactPaginate
      previousLabel=""
      nextLabel=""
      forcePage={paginates.current}
      onPageChange={(page) => handlePagination(page)}
      pageCount={paginates.total}
      breakLabel="..."
      pageRangeDisplayed={2}
      marginPagesDisplayed={2}
      activeClassName="active"
      pageClassName="page-item"
      breakClassName="page-item"
      nextLinkClassName="page-link"
      pageLinkClassName="page-link"
      breakLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextClassName="page-item next-item"
      previousClassName="page-item prev-item"
      containerClassName="pagination react-paginate separated-pagination pagination-sm justify-content-end pe-1 mt-1"
    />
  );

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
                <div style={{ margin: "24px 0" }}>No Charger Founded!</div>
              )
            }
            noHeader
            pagination
            columns={columns}
            paginationPerPage={10}
            className="react-dataTable"
            style={{ background: "red" }}
            sortIcon={<ChevronDown size={10} />}
            paginationComponent={CustomPagination}
            data={ActionTriggersData}
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
        yesLoading={loadings.deleteActionTrigger}
        yesAction={() => alert(selectedEntity?.TPid)}
        yesColor={"danger"}
        yesTitle={"Delete"}
        type={"global"}
      />
    </Fragment>
  );
};
export default ActionTriggersRoot;
