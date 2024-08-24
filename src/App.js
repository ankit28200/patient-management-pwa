import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import IPForm from './components/IPForm';
import OPForm from './components/OPForm';
import './index.css';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ip" element={<IPForm />} />
        <Route path="/op" element={<OPForm />} />
      </Routes>
    </Router>
  );
}

export default App;