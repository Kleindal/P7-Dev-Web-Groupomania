import React from 'react'
import { Button, Form, Grid } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const SignupPage = () => (
  <div id='signup-page'>
    <div>
      <h2>Rejoins l'équipe dès à présent !</h2>
      <br/>
    </div>
    <Grid columns={1} relaxed='very' stackable>
      <Grid.Column>
        <Form>
        <Form.Input
            label='Votre Prénom'
            placeholder='Prénom'
          />
          <Form.Input
            label='Votre Nom'
            placeholder='Nom'
          />
          <Form.Input
            icon='caret right'
            iconPosition='left'
            label='Entrez votre mail'
            placeholder='votre-adresse@mail.com'
          />
          <Form.Input
            icon='caret right'
            iconPosition='left'
            label='Confirmez votre mail'
            placeholder='votre-adresse@mail.com'
          />
          <Form.Input
            icon='lock'
            iconPosition='left'
            label='Mot de passe'
            type='password'
          />
          <Form.Input
            icon='caret right'
            iconPosition='left'
            label='Confirmez votre mot de passe'
            type='password'
          />
          <Button inverted color='blue'>Je m'inscris !</Button>
        </Form>
      </Grid.Column>
      <Grid.Column verticalAlign='middle'>
      </Grid.Column>
    </Grid>
    <Link to="/"><Button basic inverted color='red'>Retour</Button></Link>
  </div>
)

export default SignupPage
