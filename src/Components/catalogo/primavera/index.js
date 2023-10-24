import React from "react";
import { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import logo from "../../../assets/img/logoblanco.svg";
import logoBanner from "../../../assets/img/logoblancotexto.svg";
import "./style.css";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { FaUserAlt } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";
import IniciarSesion from "../../iniciosesion";
import Registrate from "../../register";
import primavera1 from "../../../assets/img/ramo1.png";
import primavera2 from "../../../assets/img/ramo2.png";
import primavera3 from "../../../assets/img/ramo3.png";
import primavera4 from "../../../assets/img/ramo4.png";

export const Primavera = () => {
  const [scrolled, setScrolled] = useState(false);
  window.addEventListener("scroll", () => {
    setScrolled(window.scrollY >= 50);
  });

  const [modalShow, setModalShow] = useState(false);
  const [otroModalShow, setOtroModalShow] = useState(false);
  return (
    <div className="main">
      <div className="aver">
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
                <Nav.Link href="Menu" className="text-white mx-3">
                  Servicios
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
        <div className="banner-image-primavera w-100 vh-100 d-flex justify-content-center align-items-center">
          <div className="container content text-center text-white">
            <div className="d-flex justify-content-center">
              <div className="logoNav py-0">
                <img className="logoBanner" src={logoBanner}></img>
              </div>
            </div>

            <h2 className="pb-1">Primavera</h2>

            <p className=" pb-2">
              La primavera es un tiempo de renacimiento, cuando la naturaleza
              despierta de su sueño invernal.
            </p>

            <Button
              variant="outline-light "
              style={{ borderRadius: "0px" }}
              href="#catalogoP"
            >
              Ver Catálogo
            </Button>
          </div>
        </div>
        <br />
        <div className="container" id="catalogoP">
          <div className="row d-flex pb-5 mt-5 justify-content-center">
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera1} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera2} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera3} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera4} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row d-flex pb-5 justify-content-center">
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera1} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera2} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera3} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera4} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row d-flex pb-5 mt-5 justify-content-center">
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera1} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera2} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera3} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera4} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>

          <div className="row d-flex pb-5 mt-5 justify-content-center">
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera1} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera2} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera3} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 col-sm-auto">
              <Card style={{ width: "16rem" }}>
                <Card.Img variant="top" src={primavera4} />
                <Card.Body>
                  <Card.Text className="txtC">Renacimiento Floral</Card.Text>
                  <Button
                    variant="outline-dark "
                    style={{ borderRadius: "0px" }}
                    href="#catalogoP"
                  >
                    Ordenar
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
