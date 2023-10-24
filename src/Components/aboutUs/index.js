import React from "react";
import "./style.css";
import flor1 from "../../assets/img/flor1.png";
import Iframe from "react-iframe";
import Mapa from "../mapa/mapa";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Barra } from '../barra/index';
import { Footer } from '../footer/index';

export const AboutUs = () => {
  return (
    <div>
    <Barra/>
<div className="eslogan container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-sm-auto">
          <img className="img1" src={flor1} width={500}></img>
        </div>

        <div className="col-md-6 col-sm-auto">
          <div className="prf1 py-5">
            <h3>"Cultivando emociones, entregando sonrisas."</h3>
            <p>
              Siempre queremos crear momentos emotivos y llenos de sorpresas,
              buscamos trasnmitir esas emociones en cada regalo que creamos para
              ti.
            </p>
          </div>
        </div>
      </div>

      <div className="row d-flex justify-content-center">
        <div className="col-md-6 col-sm-auto">
          <div className="prf2 py-5">
            <h3>Contáctanos</h3>
            <Form>
            <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1">
                  
                <Form.Label>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Ej: John " />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1">

                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control type="email" placeholder="ejemplo@dominio.com" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1">

                <Form.Label>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <Button
              variant="outline-dark px-5"
              style={{ borderRadius: "0px" }}
              href="Menu"
              className="botonn">
              Enviar
            </Button>
          </div>
        </div>
        <div className="col-md-6 col-sm-auto py-5">
          <Mapa />
        </div>
      </div>
    </div>
<Footer/>
    </div>
    
  );
};
