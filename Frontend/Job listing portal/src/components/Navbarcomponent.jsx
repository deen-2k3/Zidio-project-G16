import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Navbarcomponent.css';

import { LinkContainer } from 'react-router-bootstrap'; // Import LinkContainer for routing

export default function Navbarcomponent() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#">Job Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                    </Nav>

                    {/* Centered Search Form */}
                    <Form className="d-flex mx-auto" style={{ flexGrow: 1, maxWidth: '500px',justifyContent:'center' }}>
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success" >Search</Button>
                    </Form>

                    <Nav className="ms-auto">
                        <LinkContainer to="/login">
                            <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/signup">
                            <Nav.Link>SignUp</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/jobhost">
                            <Nav.Link>Job Host</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
