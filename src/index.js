import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import { Inicio } from "./Components/inicio";
import { Invierno } from "./Components/catalogo/invierno";
import { Otonio } from "./Components/catalogo/otonio";
import { Primavera } from "./Components/catalogo/primavera";
import { Verano } from "./Components/catalogo/verano";
import { AboutUs } from "./Components/aboutUs";



import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  BrowserRouter,
  Routes,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<App/>} />
      <Route path="Invierno" element={<Invierno />} />
      <Route path="Otonio" element={<Otonio />} />
      <Route path="Primavera" element={<Primavera />} />
      <Route path="Verano" element={<Verano />} />
      <Route path="AboutUs" element={<AboutUs />} />
    </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
