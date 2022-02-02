import logo from './logo.svg';
import './App.css';
import SignupPage from '../../pages/signup-page';

function App({children: login}) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenue
        </p>
        {SignupPage}
        <a
          className="App-link"
          href=".\signup-page.js"
          rel="noopener noreferrer"
        >
          Sign up Now
        </a> 
      </header>
    </div>
  );
}

export default App;
