import React from 'react';
import './group-element.css';
import { Row, Col } from 'react-bootstrap';





export const GroupAside = ({children}) => (

  <div className='group-aside'>
    <h1>Yes</h1>
      <Col>
        {children}
      </Col>

  </div>

)




// const groupElements = [];
// for (var i=0; i < 1; i++) {
//   groupElements.push(<GroupElement name="Vincent Boloré" isOnline={true}/>)
// }
