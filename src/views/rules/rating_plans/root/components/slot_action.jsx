import { Button } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSlots } from "../../../../../redux/rating_plans_slice";

const SlotAction = ({ id }) => {
  const dispatch = useDispatch();

  const slots = useSelector((state) => state.ratingPlans.slots);

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
export default SlotAction;
