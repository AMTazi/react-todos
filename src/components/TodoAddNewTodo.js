// @flow
import React, { Component } from 'react';

type State = {
  newTodo: string
};
type Props = {
  onAddTodo: (todo: string) => void
};
class TodoAddNewTodo extends Component<Props, State> {
  state = {
    newTodo: ''
  };

  handleTodoChange = (e: any) => {
    switch (e.key) {
      case 'Enter':
        this.props.onAddTodo(this.state.newTodo.trim());
        this.setState({
          newTodo: ''
        });
        break;
      default:
        this.setState({
          newTodo: e.target.value
        });
        break;
    }
  };

  render() {
    return (
      <input
        className="new-todo"
        placeholder="What needs to be done?"
        value={this.state.newTodo}
        onChange={this.handleTodoChange}
        onKeyUp={this.handleTodoChange}
      />
    );
  }
}

export default TodoAddNewTodo;
