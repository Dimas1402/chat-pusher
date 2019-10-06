import React from "react";
import MessageForm from "./MessageForm";
import ChatList from "./ChatList";
import { ChatManager, TokenProvider } from "@pusher/chatkit-client";

class ChatRoom extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.sendMessage = this.sendMessage.bind(this);
  }
  componentDidMount() {
    const chatManager = new ChatManager({
      instanceLocator: "v1:us1:8076da6d-2921-42f5-ab2b-5a07aa4ca42b",
      userId: this.props.userId,
      tokenProvider: new TokenProvider({
        url:
          "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/8076da6d-2921-42f5-ab2b-5a07aa4ca42b/token"
      })
    });

    chatManager
      .connect()
      .then(currentUser => {
        this.currentUser = currentUser;
        currentUser.subscribeToRoom({
          roomId: "d34b9910-c564-4fe9-89e7-a74a23390574",
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [message, ...this.state.messages]
              });
            }
          },
          messageLimit: 10
        });
      })
      .catch(err => {
        console.log("Error on connection", err);
      });
  }
  sendMessage(text) {
    this.currentUser.sendMessage({
      roomId: "d34b9910-c564-4fe9-89e7-a74a23390574",
      text
    });
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="wrapper">
            <div className="content-wrapper">
              <div className="content">
                <ChatList messages={this.state.messages} />
              </div>
            </div>
            <div className="footer">
              <div className="ChatBox"></div>
              <MessageForm onSubmit={this.sendMessage} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChatRoom;
