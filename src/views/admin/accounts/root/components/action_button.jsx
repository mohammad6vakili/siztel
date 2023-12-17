import { Fragment } from "react";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { setDetailsModal } from "../../../../../redux/accounts_slice";
import { useNavigate } from "react-router-dom";
import useAccounts from "../../../../../hooks/use_accounts";

const ActionButton = ({ row }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { getAccount } = useAccounts();

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
          dispatch(setDetailsModal(1));
          getAccount(row.ID.split(":")[0], row.ID.split(":")[1]);
        }}
      >
        Details
      </Button>
    </Fragment>
  );
};
export default ActionButton;
