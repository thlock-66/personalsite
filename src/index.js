import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UIUX from "./components/UIUX";
import WITP from "./components/witp";
import Gdesign from "./components/gdesign";
import Work from "./components/Work";
import SmartMirror from "./components/smartmirror";
import FYP from "./components/fyp";
import Contact from "./components/Contact";
import Photography from "./components/Photography";
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
      <Route path="Work" element={<Work />} />
      <Route path="Photography" element={<Photography />} />
      <Route path="UIUX" element={<UIUX />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Gdesign" element={<Gdesign />} />
      <Route path="WITP" element={<WITP />} />
      <Route path="SmartMirror" element={<SmartMirror />} />
      <Route path="FYP" element={<FYP />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
