import { Fragment } from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import {
  setDeleteModal,
  setSelectedEntity,
} from "../../../../../redux/accounts_slice";
import { useNavigate } from "react-router-dom";

const ActionButton = ({ row }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <Fragment>
      <Button
        style={{ padding: 6, marginRight: 8 }}
        size="sm"
        color="primary"
        outline
        onClick={() => {
          navigate(`/admin/accounts/update?entity_id=${row.ID}`);
        }}
      >
        Update
      </Button>
      <Button
        style={{ padding: 6 }}
        size="sm"
        color="primary"
        onClick={() => {
          dispatch(setSelectedEntity(row.ID));
          dispatch(setDeleteModal(1));
        }}
      >
        Details
      </Button>
    </Fragment>
  );
};
export default ActionButton;
