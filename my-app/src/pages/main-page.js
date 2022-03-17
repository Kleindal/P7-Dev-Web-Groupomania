import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../styles/main-page.css';
import '../styles/styles.root.css';

const MainPage = () => (
<div>
  <div className='container'>
    <img src={logo} className="App-logo" alt="logo" />
    <div className='title-hype'>
      <div>Connectez-vous dès à présent pour participer à l'espace discussions</div>
    </div>
    <div>
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
    </div>
  </div>
</div>
)

export default MainPage
