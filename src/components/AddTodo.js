import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  onChange = e =>
    this.setState({
      [e.target.name]: e.target.value
    });

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            name="title"
            placeholder="Add Todo...."
            value={this.state.title}
            onChange={this.onChange}
          />
          <span className="input-group-append">
            <input type="submit" value="Add Todo" className="btn btn-primary" />
          </span>
        </div>
      </form>
    );
  }
}

export default AddTodo;
