import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSlots } from "../../../../../redux/cdr_slice";

const CostPriceAction = ({ id }) => {
  const dispatch = useDispatch();

  const slots = useSelector((state) => state.cdr.slots);

  return (
    <Button
      onClick={() => dispatch(setSlots(slots.filter((item) => item.id !== id)))}
      style={{ padding: 6 }}
      size="sm"
      color="danger"
      type="button"
    >
      Delete
    </Button>
  );
};
export default CostPriceAction;
