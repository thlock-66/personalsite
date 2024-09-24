import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Contact from "./components/Contact";
import Photography from "./components/Photography";
import EPhotography from "./components/EPhotography";
import reportWebVitals from "./reportWebVitals";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Photography" element={<Photography />} />
      <Route path="Photography2" element={<EPhotography />} />
      <Route path="Contact" element={<Contact />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById("root")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
