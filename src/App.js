import { useState } from "react";
import "./App.css";
import User from "./components/User";
import PrivateText from "./components/PrivateText";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.js";

const App = () => {
  const [currUser, setCurrUser] = useState(null);
  return (
    <>
      <NavBar />
      <User currUser={currUser} setCurrUser={setCurrUser} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};
export default App;
