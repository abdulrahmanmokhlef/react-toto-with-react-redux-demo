import React from "react";
import { handleCreateTodo } from "../redux/thunks";
import { connect } from "react-redux";

class NewTodo extends React.Component {
  state = {
    text: ""
  };

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.create(this.state.text, 1);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button type="submit">Create</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  create: (title, userId) => dispatch(handleCreateTodo(title, userId))
});

export default connect(null, mapDispatchToProps)(NewTodo);
