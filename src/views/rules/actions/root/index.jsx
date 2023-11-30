import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useActions from "../../../../hooks/use_actions";
import ProgressLoading from "../../../../components/progress_loading/index";
import ReactPaginate from "react-paginate";
import { Col, Button } from "reactstrap";
import { useSkin } from "@hooks/useSkin";
import ActionsData from "../../../../data/actions.json";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import { useNavigate } from "react-router-dom";
import { columns } from "./datatable/columns";
import Confirm from "../../../../components/confirm/index";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../../../../redux/actions_slice";

const ActionsRoot = () => {
  const { skin } = useSkin();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loadings, paginates, setPaginates } = useActions();

  const selectedAction = useSelector((state) => state.actions.selectedAction);
  const deleteModal = useSelector((state) => state.actions.deleteModal);

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
      {!loadings.getChargers ? (
        <Fragment>
          <DataTable
            noDataComponent={
              loadings.getChargers ? (
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
            data={ActionsData}
            theme={skin === "dark" ? "darkTheme" : ""}
          />
        </Fragment>
      ) : null}
      {loadings.getActions ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
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
        yesAction={() => alert("Delete...")}
        yesColor={"danger"}
        yesTitle={"Delete"}
        type={"global"}
      />
    </Fragment>
  );
};
export default ActionsRoot;
