import React from 'react';
import { Link } from 'react-router-dom';
import reactDom from 'react-dom';

import Box from '../components/test';
import BoopButton from '../components/send-sound';
import '../styles/chat-space.css'

import { HttpService } from '../api/http-service';
const http = new HttpService();


let data;

const ChatSpace = () => {
    // data.map


    http.get('/api/groups')
        .then(data => {
            console.log(data)
            data = data
        } 
        );

    return (<div>
        
        <div className='ui segment'>
            <p></p>
        </div>

        <div className='container' key={1}>
            <div className='group-aside'>


                {data&& data.map((current, index) => {
                    return(
                        <div className='group-topic'>
                            <div className='topic-image'>
                                <div className='topic-name' id='topic-name' key={current.id}>{current.groupName}</div>
                                <img src='https://www.rustica.fr/images/pic-midi-bigorre-l760-h550.jpg' alt='mountains_image_user'></img>
                            </div>
                            <div className='user-about' id='user-about'>User 1, User 2, User 3</div>
                        </div>
                    )
                })

            }




                <div className='create-group'>
                    <div className='ui icon button'>
                        <i className='plus icon'></i>
                    </div>
                </div>
            </div>
            <div className='box-chat'>
                <div className='attachements'>
                <div className='create-group'>
                    <div className='ui animated fade button' tabIndex='0'>
                        <div className='visible content'>
                        <i className='paperclip icon' id='attachement'></i>
                        </div>
                        <div className='hidden content'>Fichier</div>
                    </div>
                </div>               
                </div>
                <div className='send-message'>
                    <BoopButton></BoopButton>
                </div>
            </div>
            <div className='main-chat'>
                {/* <div className='main-read'>Premier Topic</div> */}
                <div className='user-chat'>
                </div>
            </div>
            <div className='settings'>
              <div className='log-out'>
                <Link to="/"><i className='power off icon' id='log_out'></i></Link>
              </div>
              <div className='cog'>
                <i className='cog icon' id='setting'></i>
              </div>
              <div className='contact'>
                <i className='adress book icon' id='contact'></i>
              </div>
            </div>
        </div>
    </div>);
};


    // fetch('../assets/dummy-data.json')
    // .then((res) => res.json())
    // .then(function getGroupsInfo(data) {
    //   console.log()
    // });
    


export default ChatSpace
