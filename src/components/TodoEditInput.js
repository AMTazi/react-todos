// @flow
import React, { Component } from 'react';
import type { Todos } from '../custom-definitions/definitions';

type Props = {
  todo: Todos,
};

type State = {
  newTodo: string
};   

class TodoEditInput extends Component<Props, State> {
  state = {
    newTodo: this.props.text
  };

  handleTodoChange = (e: any) => {

    const nTodo = e.target.value;

    const { editTodo, toggleEditTodo, id, text } = this.props;

    switch (e.key) {
      case 'Enter':
        if (text !== nTodo) {
          editTodo(id, this.state.newTodo.trim());
        }
        break;
      case 'Escape':
        toggleEditTodo(id);
        break;
      default:
        this.setState({
          newTodo: nTodo
        });
        break;
    }
  };

  render() {
    return (

       <input
          ref={ (ref) => this.editingRef = ref}
          className="edit"
          value={this.state.newTodo}
          onChange={this.handleTodoChange}
          onKeyUp={this.handleTodoChange}
        />
    );
  }
}

export default TodoEditInput;
