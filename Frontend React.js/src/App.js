import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './style.css';
import Login from './Components/Login';
import WebPath from './Components/WebPath'; 




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/*" element={<WebPath />} />
      </Routes>
    </Router>
  );
}

export default App;
