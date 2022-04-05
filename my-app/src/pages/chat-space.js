import React from 'react';
import { Link } from 'react-router-dom';
// import BoopButton from '../components/send-sound';
import '../styles/styles.root.css'
import { GroupElement } from '../components/GroupElement.js';
import { HttpService } from '../api/http-service';
import { Container, Row, Col} from 'react-bootstrap';
import { Navbar } from '../components/Navbar';
import { GroupAside } from '../components/GroupList';
import MessageList from '../components/MessageList';
import UserProfile from '../components/UserProfile'
import MessageInteract from '../components/message-interact';
const http = new HttpService();
export default class ChatSpace extends React.Component {
// data.map
constructor(props) {
  super(props);

  this.state = {
      items: [],
      DataisLoaded: false
  };
}
componentDidMount() {
  http.get('/api/groups')
  .then(data => {
    console.log(data);
    this.setState({
      items: data,
      DataisLoaded: true
  });
  });
}
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div>;
    return (
      <div className='chatspace' style={{height: "100%"}}>
        <Container>
          <Navbar />
        </Container>
        <Container className='container-space' key={1}>
          <Row>
            <Col xs={3} className='people-list group-aside'>
              <div id='plist'>
                  <GroupAside>
                    {items && items.map((current, index) => {
                      return (
                        <GroupElement
                          key={index}
                          name={current.name}
                          thumbnailUrl={current.thumbnailUrl}
                          isOnline={true}
                        />
                      )
                    })}
                  </GroupAside>
              </div>
            </Col>
            <Col>
            <MessageList />
            {/*
              <Col>
                <Row>
                  <UserProfile />
                </Row>
              </Col>
            */}
            <Row>
              <MessageInteract />
            </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
