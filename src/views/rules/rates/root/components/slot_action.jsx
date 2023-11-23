import { Button } from "reactstrap";
import useRates from "../../../../../hooks/use_rates";

const SlotAction = ({ id }) => {
  const { slotData, setSlotData } = useRates();
  return (
    <Button
      onClick={() => setSlotData(slotData.filter((item) => item.id !== id))}
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
