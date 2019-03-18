import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import uuid from "uuid";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Take out the trash",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Have lunch",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Go for prayer",
        completed: false
      }
    ]
  };

  // Toggle Todo
  toggleTodoState = id =>
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          // toggle the completed state here
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });

  // Remove a todo from the list
  delTodo = id =>
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });

  //Add Todo
  addTodo = title =>
    this.setState({
      todos: [
        ...this.state.todos,
        {
          id: uuid.v4(),
          title,
          completed: false
        }
      ]
    });

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Route
            exact
            path="/"
            render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                <Todos
                  todos={this.state.todos}
                  toggleTodoState={this.toggleTodoState}
                  delTodo={this.delTodo}
                />
              </React.Fragment>
            )}
          />
          <Route path='/about' component={About}/>
        </div>
      </Router>
    );
  }
}

export default App;
