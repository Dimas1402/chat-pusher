import React from "react";
import "../App.css";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.state.username === "") {
      alert("kosong woyy!! isi dulu");
    } else {
      console.log(this.state.username);
      this.props.onSubmit(this.state.username);
    }
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="content-wrapper">
          <div className="content">
            <h1>Aiwah Chat</h1>
            <p>chat kuy</p>
            <div className="LoginForm">
              <form onSubmit={this.handleSubmit}>
                <input
                  onChange={this.handleChange}
                  type="text"
                  autoComplete="off"
                  name="username"
                  className="login_input"
                  placeholder="username"
                />
                <button className="login_button">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="footer">
          <h2>Join now</h2>
          <p>free</p>
          <br />
        </div>
      </div>
    );
  }
}

export default LoginForm;
