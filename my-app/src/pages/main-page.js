import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg';

const MainPage = () => (
<div>
  <img src={logo} className="App-logo" alt="logo" />
    <div className='title-welcome'>
      <h2>Connectez-vous dès à présent pour participer à notre espaces de discussions !</h2>
    </div>
  <nav className='connect-choice'>
      <div className='login'>
        <Link to="/login">Se connecter</Link>
      </div>
      <div className='signup'> 
        <Link to="/signup">S'inscrire</Link>
      </div>

      <div className='chatspace'>
        <Link to="/chatspace">- interface -</Link>
      </div>
  </nav>
</div>
)

export default MainPage
