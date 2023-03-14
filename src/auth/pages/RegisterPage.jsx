import React from 'react';
import './AutenticationPage.css';
import { Link } from "react-router-dom";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

export const RegisterPage = () => {
  return (
    <div className="backgroundImage">
      <Form className="box2 autenticationPage">
        <Container>
          <div>
            <div className="row">
              <Form.Group className="mb-6 text-center" controlId="formBasicEmail">
                <Form.Label>Ingles App</Form.Label>
              </Form.Group>
              <Form.Group className="mb-6">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-6">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group className="mb-6" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Email" required />
              </Form.Group>
              <Form.Group className="mb-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-6" controlId="formBasicPassword">
                <Form.Label> Repeat Password</Form.Label>
                <Form.Control type="password" placeholder="Password 2" />
              </Form.Group>
              <Form.Group className="text-center">
                <Button className="button" variant="outline-primary" type="submit">
                  Register
                </Button>
              </Form.Group>
              <Form.Group className="text-center">
                <Form.Label>Already have an account? <Link to="/*"> Login here!</Link></Form.Label>
              </Form.Group>
            </div>
          </div>
        </Container>
      </Form >
    </div>
  )
}
