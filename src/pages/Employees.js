// file name: Employees.js

import { useLoaderData } from "react-router-dom";

import { Container, Row, Col, Card } from 'react-bootstrap';

import React from "react"
import logo from '../images/logo.svg';

/**
 * Eigene Seite um die Mitarbeiter anzuzeigen
 * @returns 
 */
export default function Employees() {
  // Lade Daten vom Service
  const employees = useLoaderData();

  function ShowEmployee(currentEmployee) {
    return (
      <Card key={currentEmployee.id} className='mb-3'>
        <Row className='g-0'>
          <Col md={4}>
            <img src={logo} alt={currentEmployee.name} className='img-fluid' />
          </Col>
          <Col md={8}>
            <Card.Body>
              <Card.Title>{`${currentEmployee.full_name}`}</Card.Title>
              <Card.Text><strong>Aufgabe:</strong> {currentEmployee.job}</Card.Text>
              <Card.Text><strong>Bereich:</strong> {currentEmployee.department}</Card.Text>
              <Card.Text><strong>Besonderes:</strong> {currentEmployee.information}</Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    );
  }

  return (
    <Container className='text-center mt-5'>
      <h2>Unsere Mitarbeiter</h2>
      {employees.map(ShowEmployee)}
    </Container>
  );
}
