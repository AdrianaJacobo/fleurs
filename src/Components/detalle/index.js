import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import logo from "../../assets/img/logo.svg";
import fotodetalle from "../../assets/img/ramoDetalle1.png";
import { FaDollarSign } from "react-icons/fa6";
import { PiFlowerFill } from "react-icons/pi";

const Detalle = (props) => (
  <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered scrollable
  >
    <Modal.Body>
      <div className="py-3 px-3">
        <div className="row d-flex align-content-center align-items-center">
          <div className="col-md-5 col-sm-auto">
            <img className=" pb-4 m-auto w-100" src={fotodetalle}></img>
          </div>
          <div className="col-md-7 col-sm-auto pe-4">
            <div className="row">
              <p>
                <b>Nombre</b>
              </p>
              <p>Brillo Estival</p>
            </div>
            <div className="row">
              <p>
                <b>Descripción</b>
              </p>
              <p style={{ textAlign: "justify" }}>
                Este hermoso ramo combina la elegancia de las rosas y tulipanes
                con la frescura de los claveles y la alegría de las caléndulas.
                Las rosas aportan un toque romántico y suave, mientras que los
                tulipanes añaden un toque de sofisticación con sus formas
                únicas. Los claveles aportan durabilidad y una fragancia suave,
                mientras que las caléndulas proporcionan un toque de color
                brillante y alegre.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-auto">
            <p>
              <FaDollarSign /> <b>Precio</b>
            </p>
            <hr></hr>
            <p>$60.00</p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-auto">
            <p>
              <PiFlowerFill /> <b>Flores incluidas:</b>
            </p>
            <hr></hr>
            <p>
              <ul>
                <li>Rosas</li>
                <li>Tulipanes</li>
                <li>Claveles</li>
                <li>Caléndulas</li>
              </ul>
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center rounded-0">
        <Button variant="outline-dark btn-purple" style={{ width: "50%", borderRadius: "0px" }}>
          Ordenar
        </Button>
      </div>
    </Modal.Body>
  </Modal>
);

export default Detalle;
