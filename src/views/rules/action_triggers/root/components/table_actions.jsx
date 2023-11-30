import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  setSelectedAction,
  setDeleteModal,
} from "../../../../../redux/actions_slice";

const TableActions = ({ row }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="d-flex align-items-center">
      <Button
        onClick={() => {
          dispatch(setSelectedAction(row));
          dispatch(setDeleteModal(1));
        }}
        style={{ marginRight: 8 }}
        color="danger"
        size="sm"
      >
        Delete
      </Button>
      <Button
        onClick={() => {
          navigate(`/rules/action_triggers/update?entity_id=${row.TPid}`);
        }}
        style={{ marginRight: 8 }}
        color="primary"
        size="sm"
      >
        Update
      </Button>
    </div>
  );
};
export default TableActions;
