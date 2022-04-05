import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Modal from 'react-bootstrap/Modal';

import '../styles/styles.root.css'


function CheckUserProfile(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          <Card style={{ width: '18rem' }} className="text-center">
            <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Body>
              <Card.Title>Mon profil</Card.Title>

            </Card.Body>
            <ListGroup className="list-group-flush">
              <div>
                <ListGroupItem>
                  <div className="UserInfo">
                    <img className="Avatar"
                      // src={props.author.avatarUrl}
                      // alt={props.author.name}
                    />
                    <div className="UserInfo-name">
                      {/* {props.author.name} */}
                    </div>
                  </div>
                </ListGroupItem>
                <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                <ListGroupItem>Vestibulum at eros</ListGroupItem>
              </div>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#">Card Link</Card.Link>
              <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>

        </Modal.Title>
      </Modal.Header>
      <Modal.Body>

      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function UserProfile() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Mon profil
      </Button>

      <CheckUserProfile
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default UserProfile
