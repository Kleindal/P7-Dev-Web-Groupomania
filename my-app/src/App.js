import './App.css';
import { Col, Row } from 'react-bootstrap';


function App({children}) {
  return (
    <div style={{ height: "100vh", bottom: "0"}}>
      {children}
    </div>
  );
}

export default App;
