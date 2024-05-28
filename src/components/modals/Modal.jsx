import "./Modal.css";
import { Modal } from "react-bootstrap";

const ReusableModal = ({
  show,
  onHide,
  children,
  size,
  customClass,
  customBackdropClass,
}) => {
  return (
    <Modal
      size={size}
      aria-labelledby="contained-modal-title-vcenter"
      centered
      show={show}
      onHide={onHide}
      className={`MyModal ${customClass ? customClass : ""}`}
      backdropClassName={customBackdropClass && customBackdropClass}
    >
      <Modal.Body>{children}</Modal.Body>
    </Modal>
  );
};

export default ReusableModal;
