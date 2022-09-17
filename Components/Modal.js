import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
function CenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body">
        <img src={props.image} alt="pokemon" />
        <div>
          <h3> Stats</h3>
          <div className="stats">
            <p>{props.stat1}</p>
            <p>{props.stat2}</p>
            <p>{props.stat3}</p>
            <p>{props.stat4}</p>
            <p>{props.stat5}</p>
            <p>{props.stat6}</p>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default CenteredModal;
