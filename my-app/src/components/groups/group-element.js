import React from 'react';
import './group-element.css';
import { Row, Col, Button } from 'react-bootstrap';

export const GroupElement = (props) => (
  <div className='group-header'>
    <Row xs="auto" className='header'>
      <Col>
      <div>
        <img
            src={props.thumbnailUrl}
            alt="avatar"
          />
      </div>
      </Col>
      <Col xs={6}>
        <div className="name">
          {props.name}
        </div>
        <div className="status">
          {props.isOnline ? 'Online' : 'Offline'}
          <i class="bi bi-circle-fill"></i> left 7 mins ago{" "}
        </div>
      </Col>
    </Row>
  </div>

)
