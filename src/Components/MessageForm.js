import React from "react";

class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.message === "") {
      alert("kosong");
    } else {
      this.props.onSubmit(this.state.message);
      this.setState({
        message: ""
      });
      console.log(this.state.message);
    }
  }

  handleChange(e) {
    this.setState({
      message: e.target.value
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.message}
            type="text"
            autoComplete="off"
            name="username"
            className="ChatBox_input"
            placeholder="Message"
          />
          <button type="submit" className="ChatBox_button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default MessageForm;
