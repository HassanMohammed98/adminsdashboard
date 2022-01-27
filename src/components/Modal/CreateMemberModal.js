import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import libraryStore from "../../LibraryStore";

const CreateMemberModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataEntered, setDataEntered] = useState({
    firstName: "",
    lastName: "",
    membership: "",
  });
  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);
  const handleChange = (event) => {
    setDataEntered({ ...dataEntered, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    libraryStore.addMember(dataEntered);
    setDataEntered({
      firstName: "",
      lastName: "",
      membership: "",
    });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New member to the Library
      </Button>

      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Member</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Form.Group className="mb-3">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="firstName"
            type="text"
            placeholder="Enter First Name"
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="lastName"
            type="text"
            placeholder="Enter Last Name"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Membership Type</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="membership"
            type="text"
            placeholder="Enter Membership Type"
          />
        </Form.Group>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CreateMemberModal;
