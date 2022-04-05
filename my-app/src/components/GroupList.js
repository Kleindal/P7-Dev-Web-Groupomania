import React from 'react';
import '../styles/styles.root.css';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
// import UserCard from '../user-setting.js/user-card';

export const GroupAside = ({children}) => (

  <div className='group-aside'>
    <button type="button" class="SideNav-MenuButton-module--cls2--3Tgj0 SideNav-MenuButton-module--cls1--4Fx9F p-0 d-md-none ms-3 btn btn-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30" focusable="false"><title>Menu</title><path stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" d="M4 7h22M4 15h22M4 23h22"></path></svg></button>
    {/* <UserCard /> */}
    <h3>Groupes</h3>
      <Col>
        {children}
        {/* <div>
        <ListGroup as="ul">
        <ListGroup.Item as="li" active>
          Cras justo odio
        </ListGroup.Item>
        <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item as="li" disabled>
          Morbi leo risus
        </ListGroup.Item>
        <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
      </ListGroup></div> */}
      </Col>
  </div>

)

// const groupElements = [];
// for (var i=0; i < 1; i++) {
//   groupElements.push(<GroupElement name="Vincent Boloré" isOnline={true}/>)
// }
