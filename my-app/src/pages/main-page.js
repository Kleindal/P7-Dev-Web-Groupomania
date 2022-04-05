import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap'
import logo from '../assets/logo.svg';
import '../styles/styles.root.css';

const MainPage = () => (
  <div style={{ display: "flex", justifyContent: "center"}}>
    <div className='home-connect'>
      <div className='presentation'>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='title-hype'>
          <div>Connectez-vous dès</div>
          <div>à présent pour </div>
          <div>participer à l'espace</div>
          <div>discussions</div>
        </div>
      </div>
      <nav className='connect-page'>
          <div className='login'>
            <Link to="/login">Connexion</Link>
          </div>
          <div className='signup'>
            <Link to="/signup">S'inscrire</Link>
          </div>
          <div className='chatspace'>
            <Link to="/chatspace">- interface -</Link>
          </div>
      </nav>
    <Button variant="primary" className='btn-infos'>Go somewhere</Button>
    </div>
    <div className='fix-footer'>
      <footer>
        <p>@Groupomania</p>
      </footer>
    </div>

  </div>
)

export default MainPage
