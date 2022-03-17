import React from 'react'

import { Link } from 'react-router-dom';
import "../styles/login-signup.css";
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignupPage = () => (
  <div id='signup-page'>
    <Form>
    <div className='title-hype wslide'>
      S ' inscrire
    </div>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Adresse email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Ne partagez pas votre adresse email à qui que ce soit
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Confirmez votre adresse email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Ne partagez pas votre adresse email à qui que ce soit
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirmez le mot de passe</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Je confirme les CGU, lien." />
        <br></br>
        <Button as="input" type="submit" value="Submit" />{' '}
      </Form.Group>
      <br></br>
      <Link to="/">Retour</Link>
    </Form>
    </div>
)


export default SignupPage
