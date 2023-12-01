import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useTiming from "../../../../hooks/use_timing";
import { useSkin } from "@hooks/useSkin";
import ProgressLoading from "../../../../components/progress_loading/index";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";
import { ChevronDown } from "react-feather";
import { columns } from "./datatable/columns";
import { Col, Button } from "reactstrap";
import TimingData from "../../../../data/timing.json";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setDeleteModal } from "../../../../redux/timing_slice";
import Confirm from "../../../../components/confirm";

const TimingRoot = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { skin } = useSkin();
  const { loadings, paginates, setPaginates } = useTiming();

  const deleteModal = useSelector((state) => state.timing.deleteModal);
  const selectedEntity = useSelector((state) => state.timing.selectedEntity);

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
        <Breadcrumbs title="Timing" data={[{ title: "Timing" }]} />
        <Button
          onClick={() => navigate("/rules/timing/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Timing
        </Button>
      </Col>
      {/* datatable */}
      <div className="react-dataTable mv_datatable_container">
        {!loadings.getTimings ? (
          <Fragment>
            <DataTable
              noDataComponent={
                loadings.getTimings ? (
                  ""
                ) : (
                  <div style={{ margin: "24px 0" }}>No Timing Founded!</div>
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
              data={TimingData}
              theme={skin === "dark" ? "darkTheme" : ""}
            />
          </Fragment>
        ) : null}
        {loadings.getTimings ? (
          <div className="datatable_loading_cover">
            <ProgressLoading />
          </div>
        ) : null}
        {/* delete modal */}
        <Confirm
          visible={deleteModal}
          setVisible={setDeleteModal}
          title={"Are you sure you want to delete this timing?"}
          noAction={() => dispatch(setDeleteModal(false))}
          noColor={"secondary"}
          noTitle={"Cancel"}
          yesLoading={loadings.deleteTiming}
          yesAction={() => alert(selectedEntity?.TPid)}
          yesColor={"danger"}
          yesTitle={"Delete"}
          type={"global"}
        />
      </div>
    </Fragment>
  );
};
export default TimingRoot;
