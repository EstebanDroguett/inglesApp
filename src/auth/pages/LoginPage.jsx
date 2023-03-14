import React from 'react';
import './AutenticationPage.css';
import { Link } from "react-router-dom";
import { Button, Form, Container, Row, Col } from 'react-bootstrap';

export const LoginPage = () => {
  return (
    <div className="backgroundImage">
      <Form className="box autenticationPage">
        <Container>
          <div>
            <div className="row">
              <Form.Group className="mb-6 text-center" controlId="formBasicEmail">
                <Form.Label>Ingles App</Form.Label>
              </Form.Group>
              <Form.Group className="mb-6" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Email" required />
              </Form.Group>
              <Form.Group className="mb-6" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="text-center">
                <Button className="button" variant="outline-primary" type="submit">
                  Login
                </Button>
              </Form.Group>
              <Form.Group className="text-center">
                <Form.Label>New to Ingles App? <Link to="/auth/register"> Create an account.</Link></Form.Label>
              </Form.Group>
            </div>
          </div>
        </Container>
      </Form >
    </div>
  )
}
