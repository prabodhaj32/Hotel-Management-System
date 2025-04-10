import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import AdminRegister from './components/AdminRegister';
import AdminSignIn from './components/AdminSign';
import ChooseUser from './components/ChoseUser';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/choose-user" element={<ChooseUser />} />
        <Route path="/admin-signin" element={<AdminSignIn />} />
        <Route path="/admin-register" element={<AdminRegister />} />
      </Routes>
    </Router>
  );
};

export default App;
