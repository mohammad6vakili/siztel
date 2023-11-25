import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useRatingProfiles from "../../../../hooks/use_rating_profiles";
import ProgressLoading from "../../../../components/progress_loading/index";
import ReactPaginate from "react-paginate";
import { Col, Button } from "reactstrap";
import RatingProfilesData from "../../../../data/rating_profiles.json";
import { useNavigate } from "react-router-dom";
import RatingProfileCard from "./components/rating_profile_card";

const RatingProfilesRoot = () => {
  const navigate = useNavigate();
  const { loadings, paginates, setPaginates } = useRatingProfiles();

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
          title="Rating Profiles"
          data={[{ title: "Rating Profiles" }]}
        />
        <Button
          onClick={() => navigate("/rules/rating_profiles/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Rating Profile
        </Button>
      </Col>
      {/* datatable */}
      {!loadings.getRatingProfiles &&
        RatingProfilesData?.map((rate, index) => (
          <Fragment key={index}>
            <RatingProfileCard rate={rate} loadings={loadings} />
          </Fragment>
        ))}
      {loadings.getRatingProfiles ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
      ) : null}
    </Fragment>
  );
};
export default RatingProfilesRoot;
