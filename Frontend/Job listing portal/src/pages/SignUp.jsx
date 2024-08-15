import axios from 'axios';
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../signup.css'; // Import custom styles

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ username, email, password });
        axios.post('http://localhost:3001/users/signup', { username, email, password })
            .then(response => console.log('Response:', response.data))
            .catch(error => {
                if (error.response) {
                    console.error('Error response data:', error.response.data);
                } else {
                    console.error('There was an error!', error);
                }
            });
    };

    return (
        <Container className="mt-5">
            <h2 className="text-center mb-4">Sign Up</h2>
            <Form onSubmit={handleSubmit} className="signup-form">
                <fieldset>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Name</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Name" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} 
                            required
                        />
                    </Form.Group>
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
                    <Button variant="primary" type="submit" className="w-100 mt-3">
                        Sign Up
                    </Button>
                </fieldset>
            </Form>
        </Container>
    );
}
