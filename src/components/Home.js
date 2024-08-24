import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="title">Patient Management System</h1>
      <div className="card-container">
        <Link to="/ip" className="card card-ip">
          <h2>Inpatient (IP)</h2>
        </Link>
        <Link to="/op" className="card card-op">
          <h2>Outpatient (OP)</h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;