// @flow
import React, { Component } from 'react';
import type { Todos } from '../custom-definitions/definitions';

const classnames = require('classnames');

type Props = {
  todo: Todos,
  onDestroyClick: (todo: Todos) => void,
  onCompletedChange: (todo: Todos) => void,
  onEditTodo: (oldTodo: Todos, newTodo: string) => void,
  onEditingTodo: (todo: Todos) => void
};

type State = {
  newTodo: string
};   

class TodoItem extends Component<Props, State> {
  editingRef: any;

  constructor(props: Props) {
    super(props);
    this.editingRef = React.createRef();
  }

  state = {
    newTodo: this.props.todo.todo
  };

  componentDidUpdate() {
    this.focusInputText();
  }

  focusInputText = () => {
    if (this.props.todo.editing) {
      this.editingRef.current.focus();
    }
  };

  handleDestroyClick = () => {
    this.props.onDestroyClick(this.props.todo);
  };

  handleCompletedChange = () => {
    this.props.onCompletedChange(this.props.todo);
  };

  handleEditingTodo = () => {
    this.props.onEditingTodo(this.props.todo);
  };

  handleTodoChange = (e: any) => {
    const nTodo = e.target.value;

    const { onEditTodo, onEditingTodo } = this.props;

    switch (e.key) {
      case 'Enter':
        if (this.props.todo.todo !== nTodo) {
          onEditTodo(this.props.todo, this.state.newTodo.trim());
        } else {
          onEditingTodo(this.props.todo);
        }
        break;
      case 'Escape':
        onEditingTodo(this.props.todo);
        break;
      default:
        this.setState({
          newTodo: nTodo
        });
        break;
    }
  };

  render() {
    const { completed, editing, todo } = this.props.todo;

    const className = classnames({
      completed,
      editing
    });

    return (
      <li className={className}>
        <div className="view">
          <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={this.handleCompletedChange}
          />

          <label onDoubleClick={this.handleEditingTodo}>{todo}</label>
          <button className="destroy" onClick={this.handleDestroyClick} />
        </div>
        <input
          ref={this.editingRef}
          className="edit"
          value={this.state.newTodo}
          onBlur={this.handleEditingTodo}
          onChange={this.handleTodoChange}
          onKeyUp={this.handleTodoChange}
        />
      </li>
    );
  }
}

export default TodoItem;
