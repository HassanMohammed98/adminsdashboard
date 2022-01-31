import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import libraryStore from "../../LibraryStore";
import MiniGenreCatgTabs from "../MiniGenreCatgTabs";

const CreateBookModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [gen, setGen] = useState([]);
  const [dataEntered, setDataEntered] = useState({
    title: "",
    author: "",
    genre: "",
  });
  const removingGenre = (removingGenre) => {
    setGen(gen.filter((savedGenre) => savedGenre.genre != removingGenre));
  };
  const genresDisplayed = gen.map((genreItem) => (
    <MiniGenreCatgTabs
      key={genreItem.id}
      removingGenre={removingGenre}
      tab={genreItem.genre}
    />
  ));
  const addGenre = () => {
    let newID;
    if (gen.length == 0) {
      newID = 1;
    } else {
      newID = gen[gen.length - 1].id + 1;
    }
    setGen([...gen, { id: newID, genre: dataEntered.genre }]);
    // setDataEntered({ ...dataEntered, genre: "" });
    setDataEntered({ ...dataEntered, genre: "" });
  };

  const handleClose = () => setIsOpen(false);
  const handleShow = () => setIsOpen(true);

  const handleChange = (event) => {
    setDataEntered({
      ...dataEntered,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
    // setGen(gen.map((genArray) => genArray.genre));
    libraryStore.addBook(dataEntered, gen);
    setDataEntered({
      title: "",
      author: "",
      genre: "",
    });
    setGen([]);
    // console.log(gen);
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add New Book
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
            value={dataEntered.genre}
          />
          <Button variant="primary" onClick={addGenre}>
            Add Genre
          </Button>
          <div className="row-wrap">{genresDisplayed}</div>
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
