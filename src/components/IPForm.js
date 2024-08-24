/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function IPForm() {
  const [formData, setFormData] = useState({
    doctorName: '',
    surgeryName: '',
    patientName: '',
    patientPhone: '',
    patientId: '',
    patientGender: 'Male',
    prescription: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, prescription: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    
    try {
      await axios.post('http://localhost:5000/api/ip', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/');
    } catch (error) {
      console.error('Failed to submit form', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Inpatient Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          placeholder="Doctor Name"
          required
        />
        <input
          type="text"
          name="surgeryName"
          value={formData.surgeryName}
          onChange={handleChange}
          placeholder="Surgery Name"
          required
        />
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          placeholder="Patient Name"
          required
        />
        <input
          type="text"
          name="patientPhone"
          value={formData.patientPhone}
          onChange={handleChange}
          placeholder="Patient Phone"
          required
        />
        <input
          type="text"
          name="patientId"
          value={formData.patientId}
          onChange={handleChange}
          placeholder="Patient ID"
          required
        />
        <select
          name="patientGender"
          value={formData.patientGender}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="file"
          name="prescription"
          onChange={handleFileChange}
          required
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default IPForm;*/

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function IPForm() {
  const [formData, setFormData] = useState({
    doctorName: '',
    surgeryName: '',
    patientName: '',
    patientPhone: '',
    patientID: '', // Changed from patientId to patientID
    patientGender: 'Male',
    prescription: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, prescription: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    for (const key in formData) {
      formDataToSend.append(key, formData[key]);
    }
    
    try {
      await axios.post('http://localhost:5000/api/ip', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      navigate('/');
    } catch (error) {
      console.error('Failed to submit form', error);
    }
  };

  return (
    <div className="form-container">
      <h1>Inpatient Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          name="doctorName"
          value={formData.doctorName}
          onChange={handleChange}
          placeholder="Doctor Name"
          required
        />
        <input
          type="text"
          name="surgeryName"
          value={formData.surgeryName}
          onChange={handleChange}
          placeholder="Surgery Name"
          required
        />
        <input
          type="text"
          name="patientName"
          value={formData.patientName}
          onChange={handleChange}
          placeholder="Patient Name"
          required
        />
        <input
          type="text"
          name="patientPhone"
          value={formData.patientPhone}
          onChange={handleChange}
          placeholder="Patient Phone"
          required
        />
        <input
          type="text"
          name="patientID" // Changed from patientId to patientID
          value={formData.patientID}
          onChange={handleChange}
          placeholder="Patient ID"
          required
        />
        <select
          name="patientGender"
          value={formData.patientGender}
          onChange={handleChange}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="file"
          name="prescription"
          onChange={handleFileChange}
          required
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default IPForm;

