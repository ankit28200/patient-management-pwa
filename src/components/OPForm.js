/*import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function OPForm() {
  const [formData, setFormData] = useState({
    doctorName: '',
    diagnostics: '',
    medications: '',
    radiologyInterpretation: '',
    nextFollowUpDate: '',
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
      await axios.post('http://localhost:5000/api/op', formDataToSend, {
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
      <h1>Outpatient Form</h1>
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
          name="diagnostics"
          value={formData.diagnostics}
          onChange={handleChange}
          placeholder="Diagnostics"
          required
        />
        <input
          type="text"
          name="medications"
          value={formData.medications}
          onChange={handleChange}
          placeholder="Medications"
          required
        />
        <input
          type="text"
          name="radiologyInterpretation"
          value={formData.radiologyInterpretation}
          onChange={handleChange}
          placeholder="Radiology Interpretation"
          required
        />
        <input
          type="date"
          name="nextFollowUpDate"
          value={formData.nextFollowUpDate}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="prescription"
          onChange={handleFileChange}
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
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default OPForm;*/
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Form.css';

function OPForm() {
  const [formData, setFormData] = useState({
    doctorName: '',
    diagnostics: '',
    medications: '',
    radiologyInterpretation: '',
    nextFollowUpDate: '',
    patientName: '',
    patientPhone: '',
    patientID: '',
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
      await axios.post('http://localhost:5000/api/op', formDataToSend, {
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
      <h1>Outpatient Form</h1>
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
          name="diagnostics"
          value={formData.diagnostics}
          onChange={handleChange}
          placeholder="Diagnostics"
          required
        />
        <input
          type="text"
          name="medications"
          value={formData.medications}
          onChange={handleChange}
          placeholder="Medications"
          required
        />
        <input
          type="text"
          name="radiologyInterpretation"
          value={formData.radiologyInterpretation}
          onChange={handleChange}
          placeholder="Radiology Interpretation"
          required
        />
        <input
          type="date"
          name="nextFollowUpDate"
          value={formData.nextFollowUpDate}
          onChange={handleChange}
          required
        />
        <input
          type="file"
          name="prescription"
          onChange={handleFileChange}
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
          name="patientID"
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
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default OPForm;
