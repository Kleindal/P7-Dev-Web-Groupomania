import React from 'react'
import { Button, Form, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import "../styles/login-signup.css";

const LoginPage = () => (
  <div id='login-page'>
    <div>
      <h2>Se connecter</h2>
      <br/>
    </div>
    <Grid columns={1} relaxed='very' stackable>
      <Grid.Column>
        <Form>
          <Form.Input
            icon='user'
            iconPosition='left'
            label='Email'
            placeholder='Email'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Mot de passe'
            type='password'
          />
          <Button inverted color='green'>Je me connecte !</Button>
        </Form>
      </Grid.Column>
      <Grid.Column verticalAlign='middle'>
      </Grid.Column>
    </Grid>
    <Link to="/"><Button inverted color='red'>Retour</Button></Link>
    </div>
)


export default LoginPage
