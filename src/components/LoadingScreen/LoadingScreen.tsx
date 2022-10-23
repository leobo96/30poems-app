import { Modal, Spinner } from "reactstrap";

export function LoadingScreen() {
  return (
    <Modal
      isOpen
      className="position-relative"
      style={{
        height: "100vh",
      }}
    >
      <Spinner color="light" className="position-absolute top-50 start-50">
        Caricamento...
      </Spinner>
    </Modal>
  );
}
