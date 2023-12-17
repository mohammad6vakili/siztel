import { Modal, ModalHeader, ModalFooter, ModalBody } from "reactstrap";
import CustomButton from "../button";
import { useDispatch } from "react-redux";

const CustomModal = ({
  visible,
  setVisible,
  title,
  yesLoading,
  type,
  size,
  children,
}) => {
  // type => global, local
  const dispatch = useDispatch();
  return (
    <Modal
      isOpen={visible === 1}
      size={size ? size : "md"}
      toggle={() => {
        if (type === "global") {
          dispatch(setVisible(null));
        } else {
          setVisible(null);
        }
      }}
      className="modal-dialog-centered"
      modalClassName="modal-primary"
      key={1}
    >
      <ModalHeader
        toggle={() => {
          if (type === "global") {
            dispatch(setVisible(null));
          } else {
            setVisible(null);
          }
        }}
      >
        {title}
      </ModalHeader>
      <ModalBody>{children}</ModalBody>
      <ModalFooter className="w-100 d-flex justify-content-center">
        <CustomButton
          loading={yesLoading}
          onClick={() => {
            if (type === "global") {
              dispatch(setVisible(null));
            } else {
              setVisible(null);
            }
          }}
          style={{ width: 160 }}
          outline
          color={"primary"}
        >
          Close
        </CustomButton>
      </ModalFooter>
    </Modal>
  );
};
export default CustomModal;
