// @flow
import React, { Component } from 'react';
import TodoItem from './TodoItem';
import TodoToggleAll from './TodoToggleAll';
import type { Todos } from '../custom-definitions/definitions';

type Props = {
  todos: Array<Todos>,
  filter: string,
  onDestroyClick: (todo: Todos) => void,
  onCompletedChange: (todo: Todos) => void,
  onEditTodo: (oldTodo: Todos, newTodo: string) => void,
  onToggleAll: () => void,
  onEditingTodo: () => void,
  onEditingTodo: (todo: Todos) => void
};

class TodoBody extends Component<Props> {
  getFiltredTodos = () => {
    const { todos, filter } = this.props;

    switch (filter) {
      case 'active':
        return todos.filter(todo => !todo.completed);
      case 'completed':
        return todos.filter(todo => todo.completed);
      default:
        return todos;
    }
  };

  getTodoItems = () =>
    this.getFiltredTodos().map(todo => (
      <TodoItem
        key={`${todo.todo}`}
        todo={todo}
        onDestroyClick={this.handleDestroyClick}
        onCompletedChange={this.handleCompletedChange}
        onEditTodo={this.handleEditTodo}
        onEditingTodo={this.props.onEditingTodo}
      />
    ));

  handleDestroyClick = (todo: Todos) => {
    this.props.onDestroyClick(todo);
  };

  handleCompletedChange = (todo: Todos) => {
    this.props.onCompletedChange(todo);
  };

  handleEditTodo = (oldTodo: Todos, newTodo: string) => {
    this.props.onEditTodo(oldTodo, newTodo);
  };

  render() {
    const todos = this.getTodoItems();

    return (
      <section className="main">
        <TodoToggleAll onToggleAll={this.props.onToggleAll} />
        <ul className="todo-list">{todos}</ul>
      </section>
    );
  }
}

export default TodoBody;
