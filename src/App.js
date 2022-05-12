import "./App.css";
import Navbar from "./Pages/Shared/Navbar.js";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home.js";
import About from "./Pages/About/About.js";
import Login from "./Pages/Login/Login.js";
import Appoinment from "./Pages/Appoinment/Appoinment.js";
import SignUp from "./Pages/Login/SignUp.js";
import RequireAuth from "./Pages/Login/RequireAuth.js";

function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="appoinment"
          element={
            <RequireAuth>
              <Appoinment />
            </RequireAuth>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
