import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useSharedGroups from "../../../../hooks/use_shared_groups";
import ProgressLoading from "../../../../components/progress_loading/index";
import ReactPaginate from "react-paginate";
import { Col, Button } from "reactstrap";
import SharedGroupsData from "../../../../data/shared_groups.json";
import { useNavigate } from "react-router-dom";
import SharedGroupCard from "./components/shared_group_card";

const SharedGroupsRoot = () => {
  const navigate = useNavigate();
  const { loadings, paginates, setPaginates } = useSharedGroups();

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
          title="Shared Groups"
          data={[{ title: "Shared Groups" }]}
        />
        <Button
          onClick={() => navigate("/rules/shared_groups/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Rating Profile
        </Button>
      </Col>
      {/* datatable */}
      {!loadings.getSharedGroups &&
        SharedGroupsData?.map((rate, index) => (
          <Fragment key={index}>
            <SharedGroupCard rate={rate} loadings={loadings} />
          </Fragment>
        ))}
      {loadings.getSharedGroups ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
      ) : null}
    </Fragment>
  );
};
export default SharedGroupsRoot;
