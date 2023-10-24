import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import logo from "../../assets/img/logo.svg";
import "./style.css";

const IniciarSesion = (props) => (
  // const [mostrarOtroModal, setMostrarOtroModal] = useState(false);

  // const abrirOtroModal = () => {
  //   setMostrarOtroModal(true);
  //   props.onHide(); // Cierra el modal actual (IniciarSesion)
  // };
  <Modal
    {...props}
    size="md"
    aria-labelledby="contained-modal-title-vcenter modal-dialog-scrollable"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Inicia Sesión o Regístrate
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="text-center py-4">
        <img className="logoNav pb-4 m-auto" src={logo}></img>
        <h5>¡Fleurs te da la bienvenida!</h5>
      </div>
      <div className="pt-2 pb-2">
      <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control type="email" placeholder="name@example.com" />
          </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" placeholder="Password" />
      </FloatingLabel>
      </div>
      <p className="tienescuenta py-3 small text-center">
                  ¿Aún no te has registrado?<a href=""> Regístrate acá</a>
      </p>

      <Button variant="outline-dark  btn-purple w-100">Inicia Sesión</Button>
    </Modal.Body>
  </Modal>
);

export default IniciarSesion;
