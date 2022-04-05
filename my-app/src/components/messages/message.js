import React from "react";

import '../../styles/styles.root.css'


function Message({title, body, date, isMine, attachment}) {
    return(
      <>
        <div className="p-3 mb-3 message-design" style={{
            marginLeft: isMine ? 'auto' : '0px',
            textAlign: isMine ? 'right' : 'left'
          }}>
            <div>
              <p>{title}</p>
              <p className="mb-2 text-muted">{date}</p>
              <p>{body}</p>
              {attachment &&
                <div className="file-name">
                  Fichier: {attachment}
                </div>
              }
            </div>
          </div>
      </>
    )

}


export default Message
