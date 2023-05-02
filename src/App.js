import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import ProdDetail from "./pages/ProdDetail";
import Register from "./components/register/Register";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/prod/:id" element={<ProdDetail />} />
        <Route path="*" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
