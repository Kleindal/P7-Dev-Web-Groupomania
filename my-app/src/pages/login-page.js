import React from 'react'
import { Link } from 'react-router-dom';

import "../styles/styles.root.css";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const LoginPage = () => (
  <div id='login-page'>

    <Form aria-checked>
    <div className='title-hype wslide'>
      <div>
        <span>Connexion</span>
      </div>
    </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse Email</Form.Label>
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
        <Form.Check type="checkbox" label="Rester connecté" />
        <br></br>
        <Button as="input" type="submit" value="Submit" />{' '}
      </Form.Group>
      <br></br>
      <Link to="/">Retour</Link>
    </Form>
    </div>
)


export default LoginPage
