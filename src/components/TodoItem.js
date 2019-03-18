import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {
  getStyle = () => {
    return {
      textDecoration: this.props.todo.completed ? 'line-through' : 'none',
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div className='input-group col-lg-12 col-12' style={divStyle}>
        <div className='col-lg-11 col-10'>
          <input
            type='checkbox'
            className='form-check-input'
            id={`chkTodo${id}`}
            onChange={this.props.toggleTodoState.bind(this, id)}
          />
          <label
            className='form-check-label'
            htmlFor={`chkTodo${id}`}
            style={this.getStyle()}>
            {title}
          </label>
        </div>
        <div className='col-lg-1 col-2'>
          <button
            onClick={this.props.delTodo.bind(this, id)}
            className='btn btn-danger btn-circle pull-right'>
            <i className='fa fa-times' />
          </button>
        </div>
      </div>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
};

const divStyle = {
  background: '#f4f4f4',
  padding: '10px',
  borderBottom: '1px #ccc dotted',
};

export default TodoItem;
