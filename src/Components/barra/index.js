import React from "react";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import logo from "../../assets/img/logoblanco.svg";
import logoBanner from "../../assets/img/logoblancotexto.svg";
import "./style.css";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaUserAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import IniciarSesion from "../iniciosesion";
import Registrate from "../register";
import NavDropdown from "react-bootstrap/NavDropdown";

export const Barra = () => {
  const [scrolled, setScrolled] = useState(false);
  window.addEventListener("scroll", () => {
    setScrolled(window.scrollY >= 50);
  });

  const [modalShow, setModalShow] = useState(false);
  const [otroModalShow, setOtroModalShow] = useState(false);
  return (
    <div>
      <div>
        <Navbar
          className={`fixed-top navbar-expand-lg  p-md-3  ${
            scrolled && "scrolled"
          }`}
          variant="dark"
        >
          <div className="container">
            <Navbar.Brand href="/">
              {" "}
              <img className="logoNav" src={logo}></img>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarNav" />
            <Navbar.Collapse id="navbarNav">
              <div className="mx-auto"></div>
              <Nav className="navbar-nav">
                <NavDropdown
                  title="Catálogo"
                  className="text-white"
                  id="basic-nav-dropdown"
                  Link="active"
                >
                  <NavDropdown.Item href="Primavera">
                    Primavera
                  </NavDropdown.Item>
                  <NavDropdown.Item href="Verano">Verano</NavDropdown.Item>
                  <NavDropdown.Item href="Otonio">Otoño</NavDropdown.Item>
                  <NavDropdown.Item href="Invierno">Invierno</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="Contacto" className="text-white mx-3">
                  Arreglos Personalizados
                </Nav.Link>
                <Nav.Link href="AboutUs" className="text-white mx-3">
                  AboutUs
                </Nav.Link>

                <Dropdown className="mx-3" variant="outline-light px-4">
                  <Dropdown.Toggle
                    id="dropdown-button-dark-example1"
                    variant="outline-light px-4"
                    style={{ borderRadius: "10px" }}
                  >
                    <FaUserAlt />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="" onClick={() => setModalShow(true)}>
                      ¡Regístrate!
                    </Dropdown.Item>

                    <Dropdown.Item
                      href=""
                      onClick={() => setOtroModalShow(true)}
                    >
                      Inicia Sesión
                    </Dropdown.Item>

                    <Dropdown.Divider />
                    <Dropdown.Item href="#/action-4">
                      Centro de ayuda
                    </Dropdown.Item>
                  </Dropdown.Menu>
                  <IniciarSesion
                    show={modalShow}
                    onHide={() => setModalShow(false)}
                  />
                  <Registrate
                    show={otroModalShow}
                    onHide={() => setOtroModalShow(false)}
                  />
                </Dropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>
        <div className="banner-image w-100 vh-100 d-flex justify-content-center align-items-center">
          <div className="container content text-center text-white">
            <div className="d-flex justify-content-center">
              <div className="logoNav py-0">
                <img className="logoBanner" src={logoBanner}></img>
              </div>
            </div>

            <p className=" pb-5">
              En Fleurs, no solo vendemos flores; creamos experiencias que
              inspiran y deleitan los sentidos. Nuestra florería exclusiva es el
              lugar donde la belleza natural se encuentra con la elegancia,
              donde cada pétalo es una obra de arte y cada ramo es una historia
              que contar.
            </p>

            <Button
              variant="outline-light px-5"
              style={{ borderRadius: "0px" }}
              href="Menu"
            >
              Ver Catálogo
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
