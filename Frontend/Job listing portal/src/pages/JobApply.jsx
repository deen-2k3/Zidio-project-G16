import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

export default function JobApply() {
  const [formData, setFormData] = useState({
    name: '',
    emailId: '',
    mobileNo: '',
    experience: '',
    instituteName: '',
    course: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/jobapply/job', formData);
      console.log('Application submitted:', response.data);
      // Handle success (e.g., display a message or redirect)
    } catch (error) {
      console.error('Error submitting application:', error);
      // Handle error (e.g., display a message)
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="emailId">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="emailId"
          value={formData.emailId}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="mobileNo">
        <Form.Label>Mobile Number</Form.Label>
        <Form.Control
          type="text"
          name="mobileNo"
          value={formData.mobileNo}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="experience">
        <Form.Label>Experience</Form.Label>
        <Form.Control
          type="text"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="instituteName">
        <Form.Label>Institute Name</Form.Label>
        <Form.Control
          type="text"
          name="instituteName"
          value={formData.instituteName}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Form.Group controlId="course">
        <Form.Label>Course</Form.Label>
        <Form.Control
          type="text"
          name="course"
          value={formData.course}
          onChange={handleChange}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Apply
      </Button>
    </Form>
  );
}
