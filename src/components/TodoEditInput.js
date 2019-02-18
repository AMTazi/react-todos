// @flow
import React, { Component } from 'react';
import PropTypes from 'prop-types'


class TodoEditInput extends Component {

  state = {
    newTodo: this.props.text
  };
  
  handleTodoChange = (e: any) => {

    const { editTodo, toggleEditTodo, id, text } = this.props;

    switch (e.key) {
      case 'Enter':
        if (text !== this.state.newTodo) {
          editTodo(id, this.state.newTodo);
        }
        break;
      case 'Escape':
        toggleEditTodo(id);
        break;
      default:
        this.setState({
          newTodo: this.input.value
        })
        break;
    }
  };

  render () {

    return (

      <input
        ref={ (node) => this.input = node}
        className="edit"
        value={this.state.newTodo}
        onChange={this.handleTodoChange}
        onKeyUp={this.handleTodoChange}
      />
    );
  }
}

TodoEditInput.propTypes = {
  editTodo: PropTypes.func.isRequired,
  toggleEditTodo: PropTypes.func.isRequired, 
  id: PropTypes.number.isRequired, 
  text: PropTypes.string.isRequired
}

export default TodoEditInput;
