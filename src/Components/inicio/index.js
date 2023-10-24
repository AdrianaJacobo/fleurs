import React from "react";
import "./style.scss";
import Primavera from "../../assets/img/primavera.svg";
import Verano from "../../assets/img/verano.svg";
import Otonio from "../../assets/img/otoño.svg";
import Invierno from "../../assets/img/invierno.svg";
import bPrimavera from "../../assets/img/primaverabanner.svg";
import Button from "react-bootstrap/Button";
import { Barra } from '../barra/index';

export const Inicio = () => {
  
  return (
    <div>
      <Barra/>
      <div className="container">
        <div className="row pt-5">
          <div>
            <h4>
              <b>Explora nuestro catálogo por estaciones</b>
            </h4>
          </div>
          <div>
            En Fleurs, entendemos que cada estación del año trae consigo una
            paleta única de colores y una selección especial de flores que
            capturan la belleza y la esencia de ese momento. Nuestra colección
            de arreglos florales está cuidadosamente diseñada para celebrar la
            diversidad y la frescura de cada estación.
          </div>
        </div>
        <div className="row d-flex justify-content-center py-5">
          <div className="col-3">
            <div className="estaciones">
              <div className="estaciones-img">
                <img className="imgcollage" src={Primavera}></img>
              </div>
              <a className="text-white linksnone" href="Primavera" target="_blank">
                <h1 className="estacion-title text-white">Primavera</h1>
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="estaciones">
              <div className="estaciones-img">
                <img className="imgcollage" src={Verano}></img>
              </div>
              <a className="text-white linksnone" href="Verano" target="_blank">
                <h1 className="estacion-title text-white">Verano</h1>
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="estaciones">
              <div className="estaciones-img">
                <img className="imgcollage" src={Otonio}></img>
              </div>
              <a className="text-white linksnone" href="Otonio" target="_blank">
                <h1 className="estacion-title text-white">Otoño</h1>
              </a>
            </div>
          </div>
          <div className="col-3">
            <div className="estaciones">
              <div className="estaciones-img">
                <img className="imgcollage" src={Invierno}></img>
              </div>
              <a className="text-white linksnone" href="Invierno" target="_blank">
                <h1 className="estacion-title text-white">Invierno</h1>
              </a>
            </div>
          </div>
        </div>

        <div className="row py-5 bloquePrimavera">
          <div className="col-6">
            <h2>Primavera: Renacimiento de la Naturaleza</h2>
            <p>
              La primavera es un tiempo de renacimiento, cuando la naturaleza
              despierta de su sueño invernal. Nuestros arreglos primaverales
              reflejan la vitalidad y la energía de esta estación con flores
              frescas y vibrantes que evocan la alegría de la vida en floración.
            </p>
            <Button
              variant="outline-dark px-5"
              style={{ borderRadius: "0px" }}
              href=""
            >
              Explora la cálidez
            </Button>
          </div>
          <div className="col-6">
          <img className="banners justify-content-end" src={bPrimavera}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
