import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../Jobcard.css'; // Import the CSS file

export default function JobCard({ job }) {
  return (
    <Card className="card" style={{ width: '22rem' }}>
      <Card.Img variant="top" src={job.imgurl} alt={job.companyName} className="card-img-top" />
      <Card.Body className="card-body">
        <Card.Title className="card-title">{job.companyName}</Card.Title>
        <Card.Subtitle className="card-subtitle mb-2 text-muted">{job.role}</Card.Subtitle>
        <Card.Text className="card-text">
          Duration: {job.duration}
          <br />
          CTC: {job.ctc}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="list-group-item">Company: {job.companyName}</ListGroup.Item>
        <ListGroup.Item className="list-group-item">Role: {job.role}</ListGroup.Item>
        <ListGroup.Item className="list-group-item">Duration: {job.duration}</ListGroup.Item>
        <ListGroup.Item className="list-group-item">CTC: {job.ctc}</ListGroup.Item>
      </ListGroup>
      <Card.Body className="card-body">
        <Link to="/jobapply">
          <Button variant="primary">Apply Now</Button>
        </Link>
      </Card.Body>
    </Card>
  );
}
