import { useState } from "react";
import "./App.css";
import User from "./components/User";
import PrivateText from "./components/PrivateText";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Properties";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";
import Contact from "./Pages/Contact.js";
import Footer from "./components/Footer.js";

const App = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <NavBar />
      <User currUser={currUser} setCurrUser={setCurrUser} />
      <div style={{ flex: "1" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
