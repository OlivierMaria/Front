import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Properties";
import Contact from "./Pages/Contact.js";
import Footer from "./components/Footer.js";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import Annonce from "./Pages/Annonce.js";

const App = () => {
  const [currUser, setCurrUser] = useState(null);
  const [show, setShow] = useState(false);

  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar currUser={currUser} setCurrUser={setCurrUser} />
      <div style={{ flex: "1" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/login"
            element={<LoginPage setCurrUser={setCurrUser} setShow={setShow} />}
          />
          <Route
            path="/signup"
            element={<SignupPage setCurrUser={setCurrUser} setShow={setShow} />}
          />
          <Route path="/annonce" element={<Annonce />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
