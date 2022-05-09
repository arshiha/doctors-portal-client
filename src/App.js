import "./App.css";
import Navbar from "./Pages/Shared/Navbar.js";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.js";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
