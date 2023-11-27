import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useChargers from "../../../../hooks/use_chargers";
import { useSkin } from "@hooks/useSkin";
import ProgressLoading from "../../../../components/progress_loading/index";
import DataTable from "react-data-table-component";
import ReactPaginate from "react-paginate";
import { ChevronDown } from "react-feather";
import { columns } from "./datatable/columns";
import { Col, Button } from "reactstrap";
import ChargersData from "../../../../data/chargers.json";
import { useNavigate } from "react-router-dom";

const ChargersRoot = () => {
  const navigate = useNavigate();
  const { skin } = useSkin();
  const { loadings, paginates, setPaginates } = useChargers();

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
        <Breadcrumbs title="Chargers" data={[{ title: "Chargers" }]} />
        <Button
          onClick={() => navigate("/rules/chargers/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Charger
        </Button>
      </Col>
      {/* datatable */}
      <div className="react-dataTable mv_datatable_container">
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
              data={ChargersData}
              theme={skin === "dark" ? "darkTheme" : ""}
            />
          </Fragment>
        ) : null}
        {loadings.getChargers ? (
          <div className="datatable_loading_cover">
            <ProgressLoading />
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};
export default ChargersRoot;
