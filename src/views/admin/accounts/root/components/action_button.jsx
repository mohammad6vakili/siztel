import { Fragment } from "react";
import { Button } from "reactstrap";

const ActionButton = ({ row }) => {
  return (
    <Fragment>
      <Button style={{ padding: 6, marginRight: 8 }} size="sm" color="primary">
        Update
      </Button>
      <Button style={{ padding: 6 }} size="sm" color="danger">
        Delete
      </Button>
    </Fragment>
  );
};
export default ActionButton;
