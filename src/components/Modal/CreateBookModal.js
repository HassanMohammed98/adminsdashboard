import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import libraryStore from "../../LibraryStore";

const CreateBookModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataEntered, setDataEntered] = useState({
    title: "",
    author: "",
    genre: {},
  });
  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);
  const handleChange = (event) => {
    setDataEntered({ ...dataEntered, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    libraryStore.addBook(dataEntered);
    setDataEntered({
      title: "",
      author: "",
      genre: "",
    });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Book to the Library
      </Button>

      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Book</Modal.Title>
        </Modal.Header>
        {/* <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body> */}
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="title"
            type="text"
            placeholder="Enter Book's Title"
          />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Author</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="author"
            type="text"
            placeholder="Enter Book's author(s)"
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            onChange={handleChange}
            name="genre"
            type="text"
            placeholder="Enter Book's Genre"
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

export default CreateBookModal;
