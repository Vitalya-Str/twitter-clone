import React from "react";
import "./App.css";
import { SignIn } from "./Components/SigIn/SigIn";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";

function App() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
