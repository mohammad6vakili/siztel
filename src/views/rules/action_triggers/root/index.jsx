import { Fragment } from "react";
import Breadcrumbs from "@components/breadcrumbs";
import useActionTriggers from "../../../../hooks/use_action_triggers";
import ProgressLoading from "../../../../components/progress_loading/index";
import ReactPaginate from "react-paginate";
import { Col, Button } from "reactstrap";
import ActionTriggersData from "../../../../data/action_triggers.json";
import { useNavigate } from "react-router-dom";
import ActionCard from "./components/action_trigger_card";

const ActionTriggersRoot = () => {
  const navigate = useNavigate();
  const { loadings, paginates, setPaginates } = useActionTriggers();

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
      {/* datatable */}
      {!loadings.getActionTriggers &&
        ActionTriggersData?.map((rate, index) => (
          <Fragment key={index}>
            <ActionCard rate={rate} loadings={loadings} />
          </Fragment>
        ))}
      {loadings.getActionTriggers ? (
        <div className="datatable_loading_cover">
          <ProgressLoading />
        </div>
      ) : null}
    </Fragment>
  );
};
export default ActionTriggersRoot;
