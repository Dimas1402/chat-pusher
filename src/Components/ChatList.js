import React from "react";

class ChatList extends React.Component {
  render() {
    return (
      <div className="chat_message">
        {this.props.messages.map((message, index) => (
          <div key={index}>
            <div className="user">{message.senderId}</div>
            <p className="text">{message.text}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default ChatList;
