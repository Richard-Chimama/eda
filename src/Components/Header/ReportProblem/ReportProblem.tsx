import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { CiMenuKebab } from "react-icons/ci";

const ReportProblem = () => {
  const [showModal, setShowModal] = useState(false);
  const [report, setReport] = useState("")

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleSubmit = () => {

  }

  return <div>
      <CiMenuKebab size={26} onClick={handleModalOpen} />
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Signaler un problème</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea 
            className="form-control" 
            name="report" 
            placeholder="Signaler un problème" 
            value={report}
            onChange={(e)=> setReport(e.target.value)}
            required/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Annuler
          </Button>
          <Button variant="success" onClick={handleModalClose}>
            Envoyer
          </Button>
        </Modal.Footer>
        </Modal>
      
  </div>;
};

export default ReportProblem;
