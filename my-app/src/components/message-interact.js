import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/styles.root.css'
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel'


export const MessageInteract = () => (
    <FloatingLabel controlId="floatingTextarea" className="textarea">
      <Form.Control as="textarea" placeholder="MessageUser" />
    </FloatingLabel>
  );

export default MessageInteract
