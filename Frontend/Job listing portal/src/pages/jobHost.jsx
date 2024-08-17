import axios from 'axios';
import React, { useState } from 'react';

export default function JobHost() {
  const [image, setImage] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [duration, setDuration] = useState('');
  const [ctc, setCtc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/host/hosts', {
        imgurl: image,           // Adjusted to match backend schema
        companyName: companyName, // Adjusted to match backend schema
        role: role,
        duration: duration,
        ctc: ctc
    })
    .then(result => {
        console.log(result);
        // Reset form fields
        setImage('');
        setCompanyName('');
        setRole('');
        setDuration('');
        setCtc('');
    })
    .catch(err => {
        console.error('Error:', err.response.data);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="imgurl" className="form-label">Image</label>
          <input 
            type="url" 
            className="form-control" 
            id="imgurl" 
            value={image}
            onChange={(e) => setImage(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="companyName" className="form-label">Company Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="companyName" 
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="roleName" className="form-label">Role</label>
          <input 
            type="text" 
            className="form-control" 
            id="roleName" 
            value={role}
            onChange={(e) => setRole(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="durationT" className="form-label">Duration</label>
          <input 
            type="text" 
            className="form-control" 
            id="durationT" 
            value={duration}
            onChange={(e) => setDuration(e.target.value)} 
          />
        </div>
        <div className="mb-3">
          <label htmlFor="CTCPA" className="form-label">CTC</label>
          <input 
            type="text" 
            className="form-control" 
            id="CTCPA" 
            value={ctc}
            onChange={(e) => setCtc(e.target.value)} 
          />
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}
