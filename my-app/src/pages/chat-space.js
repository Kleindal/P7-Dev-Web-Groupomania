import React from 'react';
import { Link } from 'react-router-dom';
import BoopButton from '../components/send-sound';
import '../styles/chat-space.css'

import { GroupElement } from '../components/groups/group-element.js';
import { UserSetting } from '../components/user-setting.js/user-setting';
import { HttpService } from '../api/http-service';

import { Container, Row, Col} from 'react-bootstrap';

import { MenuNav } from '../components/nav-menu'
import { GroupAside } from '../components/groups/group-aside';

const http = new HttpService();

export default class ChatSpace extends React.Component
{
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
    }
    );
  }

  render() {
      const { DataisLoaded, items } = this.state;
      if (!DataisLoaded) return <div>
          <h1> Pleses wait some time.... </h1> </div> ;

      return (
        <div className='card chat-app'>

        <Container className='container' key={1}>

          <Row>
          <MenuNav />
          <Col>
          <div className='people-list' id='plist'>
          <Link to="/">Retour</Link>
            <div className='group-aside'>
            <div>Titre du topic</div>
              {/* {data && data.map((current, index) => {
                return (
                  <div className='group-topic'>
                    <div className='topic-image'>
                      <div className='topic-name' id='topic-name' key={current.id}>{current.groupName}</div>
                    </div>
                  </div>)
                })
              } */}
              <GroupAside>
              {items && items.map((current, index) => {
                return (
                  <GroupElement
                    key={index}
                    name={current.name}
                    thumbnailUrl={current.thumbnailUrl}
                    isOnline={true}
                  />
                )})}
              </GroupAside>
              <UserSetting />
              <div className='about' id='about'>CGU</div>

              </div>
              <div className='chat'>
                <div className='chat-history'>
                  {/* Message-data text-right */}

                </div>
                </div>
            </div>
          </Col>
          </Row>
        </Container>

      </div>
  );

  }
}

// fetch('../assets/dummy-data.json')
// .then((res) => res.json())
// .then(function getGroupsInfo(data) {
//   console.log()
// });
