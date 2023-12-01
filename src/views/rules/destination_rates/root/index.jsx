import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useDestinationRates from "../../../../hooks/use_destination_rates";
import ProgressLoading from "../../../../components/progress_loading/index";
import ReactPaginate from "react-paginate";
import { Col, Button } from "reactstrap";
import DestinationRatesData from "../../../../data/destination_rates.json";
import { useNavigate } from "react-router-dom";
import { columns } from "./datatable/columns";
import DataTable from "react-data-table-component";
import { ChevronDown } from "react-feather";
import { useSkin } from "@hooks/useSkin";
import Confirm from "../../../../components/confirm";
import { useDispatch, useSelector } from "react-redux";
import { setDeleteModal } from "../../../../redux/destination_rates_slice";

const DestinationRatesRoot = () => {
  const { skin } = useSkin();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loadings, paginates, setPaginates } = useDestinationRates();

  const deleteModal = useSelector(
    (state) => state.destinationRates.deleteModal
  );
  const selectedEntity = useSelector(
    (state) => state.destinationRates.selectedEntity
  );

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
        <Breadcrumbs
          title="Destination Rates"
          data={[{ title: "Destination Rates" }]}
        />
        <Button
          onClick={() => navigate("/rules/destination_rates/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Destination Rate
        </Button>
      </Col>
      {/* datatable */}
      {!loadings.getActionPlans ? (
        <Fragment>
          <DataTable
            noDataComponent={
              loadings.getActionPlans ? (
                ""
              ) : (
                <div style={{ margin: "24px 0" }}>No Rate Founded!</div>
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
            data={DestinationRatesData}
            theme={skin === "dark" ? "darkTheme" : ""}
          />
        </Fragment>
      ) : null}
      {loadings.getActionPlans ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
      ) : null}
      {/* delete modal */}
      <Confirm
        visible={deleteModal}
        setVisible={setDeleteModal}
        title={"Are you sure you want to delete this rate?"}
        noAction={() => dispatch(setDeleteModal(false))}
        noColor={"secondary"}
        noTitle={"Cancel"}
        yesLoading={loadings.deleteRatae}
        yesAction={() => alert(selectedEntity?.TPid)}
        yesColor={"danger"}
        yesTitle={"Delete"}
        type={"global"}
      />
    </Fragment>
  );
};
export default DestinationRatesRoot;
