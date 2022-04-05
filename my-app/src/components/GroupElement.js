import React from 'react';
import '../styles/styles.root.css'
import { Row, Col } from 'react-bootstrap';

export const GroupElement = (props) => (
  <div className='group-header'>
    <Row>
      <Col>
        <div>
          <img
            src={props.thumbnailUrl}
            alt="avatar"
          />
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <div className="name">
          {props.name}
        </div>
        <div className="status">
          {props.isOnline ? 'Online' : 'Offline'}
          <i className="bi bi-circle-fill"></i> left 7 mins ago{" "}
        </div>
      </Col>
    </Row>

  </div>

)
