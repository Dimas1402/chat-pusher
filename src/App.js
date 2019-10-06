import React from "react";
import LoginForm from "./Components/LoginForm";
import ChatRoom from "./Components/ChatRoom";
import { default as Chatkit } from "@pusher/chatkit-server";

const chatkit = new Chatkit({
  instanceLocator: "v1:us1:8076da6d-2921-42f5-ab2b-5a07aa4ca42b",
  key:
    "51fe5ae7-b14f-4fbc-9c15-64dc88022e45:/885CAh0+TPvPt8Qmq9rNg6rflb0ZkaWzVK6sbuLQXk="
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: "",
      view: "loginPage"
    };
    this.submitUser = this.submitUser.bind(this);
  }
  submitUser(username) {
    chatkit
      .createUser({
        id: username,
        name: username
      })
      .then(() => {
        this.setState({
          userId: username,
          view: "ChatRoom"
        });
      });
  }

  render() {
    if (this.state.view === "loginPage") {
      return <LoginForm onSubmit={this.submitUser} />;
    } else if (this.state.view === "ChatRoom") {
      return <ChatRoom userId={this.state.userId} />;
    }
  }
}

export default App;
