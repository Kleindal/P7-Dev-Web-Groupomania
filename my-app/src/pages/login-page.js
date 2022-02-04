import React from 'react'

import { Link } from 'react-router-dom';
import "../styles/login-signup.css";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'

const LoginPage = () => (
  <div id='login-page'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Ne partagez pas votre adresse email à qui que ce soit
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      Submit

    </Form>
    <Link to="/">Retour</Link>
    </div>
)


export default LoginPage
