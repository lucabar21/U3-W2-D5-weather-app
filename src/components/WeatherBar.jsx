import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const WeatherBar = ({ handleSearchInputChange }) => {
  const [inputValue, setInputValue] = useState("");

  // funzione per il cambiamento dopo l'evento di submit
  const onSubmitChange = (e) => {
    e.preventDefault();
    handleSearchInputChange(inputValue);
  };

  // funzione per il cambiamento dopo l'evento di change
  const inputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Navbar id="nav-bar" data-bs-theme="light" className="mt-2">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img style={{ width: "43px" }} src="Weather.256.png" alt="logo"></img>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-center">
          <Form onSubmit={onSubmitChange} className="d-flex flex-grow-1">
            <Form.Group controlId="search" className="flex-grow-1">
              <Form.Control
                className="w-100"
                type="text"
                input={inputValue}
                onChange={inputChange}
                placeholder="Search location"
              />
            </Form.Group>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default WeatherBar;
