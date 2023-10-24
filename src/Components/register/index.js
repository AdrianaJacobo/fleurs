import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import logo from "../../assets/img/logo.svg";

const Registrate = (props) => (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">¡Regístrate!</Modal.Title>
    </Modal.Header>
    <Modal.Body>
    <div className="py-3">
    <div className="text-center py-4">
        <img className="logoNav pb-4 m-auto w-25" src={logo}></img>
        <h5>¡Fleurs te da la bienvenida!</h5>
      </div>
    <div className="row d-flex">
        <div className="col-md-6 col-sm-auto">
          <FloatingLabel
            controlId="floatingInput"
            label="Nombres"
            className="mb-3"
          >
            <Form.Control type="name" placeholder="name" />
          </FloatingLabel>
        </div>
        <div className="col-md-6 col-sm-auto">
          <FloatingLabel
            controlId="floatingInput"
            label="Apellidos"
            className="mb-3"
          >
            <Form.Control type="lastname" placeholder="lastname" />
          </FloatingLabel>
        </div>
      </div>
      <FloatingLabel
        controlId="floatingInput"
        label="Fecha de Nacimiento"
        className="mb-3"
      >
        <Form.Control type="date" placeholder="dd-mm-yyyy" />
      </FloatingLabel>
      <div className="row">
        <div className="col-12">
          <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
        </div>
      </div>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
    </div>
      
      <Button variant="outline-dark  btn-purple w-100">Inicia Sesión</Button>

      <p className="tienescuenta pt-3 small text-center">
                  ¿Ya tienes cuenta?<a href=""> Inicia Sesión</a>
      </p>
    </Modal.Body>
  </Modal>
);

export default Registrate;
