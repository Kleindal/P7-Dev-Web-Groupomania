import React from "react";
import "./App.css";

export const Group = () => {
  return (
    <>
          <div className='group-aside'>
              <div className='group-topic'>
                  <div className='topic-image'>
                      <div className='ui secondary pointing menu'>
                          <a className='item active'>Home</a>
                          <a className='item'>Messages</a>
                          <a className='item'>Friends</a>
                          <div className='right menu'>

                          </div>
                      </div>
                      <div className='topic-name' id='topic-name'>Premier Topic</div>
                      <div className='user-about' id='user-about'>User 1, User 2, User 3</div>
                      <img src='https://www.rustica.fr/images/pic-midi-bigorre-l760-h550.jpg' alt='mountains_image_user'></img>
                  </div>

              </div>
              <div className='create-group'>
                  <div className='ui icon button'>
                      <i className='plus icon'></i>
                  </div>
              </div>
          </div>
    </>
  );
};