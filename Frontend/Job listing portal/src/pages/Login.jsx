import React, { useState } from "react";
import axios from 'axios';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap is imported
import '../login.css'; // Import custom styles
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(''); // For displaying errors
  const [loading, setLoading] = useState(false); // For loading state
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(''); // Clear any previous errors

    axios.post('http://localhost:3001/users/login', { email, password })
      .then(result => {
        console.log(result.data);

        // Store the JWT token if available
        if (result.data.token) {
          localStorage.setItem('authToken', result.data.token);
        }

        // Navigate to home page
        navigate('/');
      })
      .catch(err => {
        console.error(err);
        setError('Login failed. Please check your credentials.'); // Set error message
      })
      .finally(() => {
        setLoading(false); // Stop loading
      });
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <Form onSubmit={handleSubmit} className="login-form">
        <fieldset disabled={loading}> 
          {error && <Alert variant="danger">{error}</Alert>} {/* Display error if any */}
          
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Enter email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100 mt-3" disabled={loading}>
            {loading ? 'Logging in...' : 'Login'} {/* Show loading text */}
          </Button>
        </fieldset>
      </Form>
    </Container>
  );
}
