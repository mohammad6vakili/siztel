import { Button } from "reactstrap";
import loadingAnimation from "../../assets/loadings/button_loading.svg";

const CustomButton = ({ loading, children, ...props }) => {
  return (
    <Button disabled={loading} {...props}>
      {!loading ? children : null}
      {loading ? <img width={14} src={loadingAnimation} alt="loading" /> : null}
    </Button>
  );
};
export default CustomButton;
