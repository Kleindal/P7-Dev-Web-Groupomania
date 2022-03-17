import React from 'react';
import './group-element.css';
import '../../styles/styles.root.css'
import { Col } from 'react-bootstrap';
// import UserCard from '../user-setting.js/user-card';

export const GroupAside = ({children}) => (

  <div className='group-aside'>
    {/* <UserCard /> */}
    <h3>Groupes</h3>
      <Col>
        {children}
      </Col>
  </div>


)

// const groupElements = [];
// for (var i=0; i < 1; i++) {
//   groupElements.push(<GroupElement name="Vincent Boloré" isOnline={true}/>)
// }
