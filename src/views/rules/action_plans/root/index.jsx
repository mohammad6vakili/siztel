import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useActionPlans from "../../../../hooks/use_action_plans";
import ProgressLoading from "../../../../components/progress_loading/index";
import ReactPaginate from "react-paginate";
import { Col, Button } from "reactstrap";
import ActionPlansData from "../../../../data/action_plans.json";
import { useNavigate } from "react-router-dom";
import ActionPlanCard from "./components/action_plan_card";

const ActionPlansRoot = () => {
  const navigate = useNavigate();
  const { loadings, paginates, setPaginates } = useActionPlans();

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
        <Breadcrumbs title="Action Plans" data={[{ title: "Action Plans" }]} />
        <Button
          onClick={() => navigate("/rules/action_plans/new")}
          color="primary"
          style={{ position: "absolute", right: 0, top: 0 }}
        >
          New Action Plan
        </Button>
      </Col>
      {/* datatable */}
      {!loadings.getActionPlans &&
        ActionPlansData?.map((rate, index) => (
          <Fragment key={index}>
            <ActionPlanCard rate={rate} loadings={loadings} />
          </Fragment>
        ))}
      {loadings.getActionPlans ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
      ) : null}
    </Fragment>
  );
};
export default ActionPlansRoot;
