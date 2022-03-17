import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './components/App';
import LoginPage from "./pages/login-page";
import SignupPage from "./pages/signup-page";
import ChatSpace from "./pages/chat-space";
import MessagesChat from "./components/messages/message";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import MainPage from './pages/main-page';

const UidContext = createContext();

const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
document.head.appendChild(styleLink);


if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(

  // <React.StrictMode>
  <BrowserRouter>
    <Provider store= {store}>
      <App>
      <UidContext.Provider value={"uid"}>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="chatspace" element={<ChatSpace />} />
            <Route path="messages" element={<MessagesChat />} />
          </Routes>
      </UidContext.Provider>
      </App>
    </Provider>
  </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
