import React from "react";
import Message from "./messages/Message";

import '../styles/styles.root.css'

function MessageList() {

  function Message3(title, body, date, isMine, attachment) {
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

  return (
    <>
          <div
            aria-live="polite"
            aria-atomic="true"
            className="message-list"
          >
            <Message title="Utilisateur" body="Hey ! Test test, 1-2-3-4 👋" date="17h04, 5 Avril" isMine={false} />
            <Message title="Me" body="Bien reçu ! Je confirme la bonne réception du test." date= "17h06, 5 Avril" isMine={true} />
            <Message title="Utilisateur" body="Passons aux choses sérieuses !" date="17h04, 5 Avril" isMine={false} attachment="word.exe"/>

          </div>
    </>
  );
}
export default MessageList
