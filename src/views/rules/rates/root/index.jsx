import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useRates from "../../../../hooks/use_rates";
import ProgressLoading from "../../../../components/progress_loading/index";
import ReactPaginate from "react-paginate";
import { Col, Button } from "reactstrap";
import RatesData from "../../../../data/rates.json";
import { useNavigate } from "react-router-dom";
import RateCard from "./components/rate_card";

const RatesRoot = () => {
  const navigate = useNavigate();
  const { loadings, paginates, setPaginates } = useRates();

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
        <Breadcrumbs title="Rates" data={[{ title: "Rates" }]} />
        <Button
          onClick={() => navigate("/rules/rates/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Rate
        </Button>
      </Col>
      {/* datatable */}
      {!loadings.getRates &&
        RatesData?.map((rate, index) => (
          <Fragment key={index}>
            <RateCard rate={rate} loadings={loadings} />
          </Fragment>
        ))}
      {loadings.getRates ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
      ) : null}
    </Fragment>
  );
};
export default RatesRoot;
