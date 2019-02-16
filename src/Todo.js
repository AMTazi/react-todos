// @flow
import React, { Component } from 'react';
import TodoHeader from './components/TodoHeader';
import TodoBody from './components/TodoBody';
import TodoFooter from './components/TodoFooter';
import type { Todos, Action } from './custom-definitions/definitions';

type Props = {};

type State = {
  todos: Array<Todos>,
  actions: Array<Action>
};

class Todo extends Component<Props, State> {
  sectionRef: any;

  constructor(props: any) {
    super(props);

    this.sectionRef = React.createRef();
  }

  state = {
    todos: [],
    actions: [
      { text: 'All', action: 'all', selected: true },
      { text: 'Active', action: 'active', selected: false },
      { text: 'Completed', action: 'completed', selected: false }
    ]
  };

  getIncompetedItemsLength(): number {
    return this.state.todos.filter(todo => !todo.completed).length;
  }

  handleFilterClick = (filter: string): void => {
    const actions = this.state.actions.slice();
    this.setState({
      actions: actions.map(action => {
        action.selected = action.action === filter;
        return action;
      })
    });
  };

  handleClearCompletedClick = (): void => {
    const todos = this.state.todos.slice();
    this.setState({
      todos: todos.filter(todo => !todo.completed)
    });
  };

  handleDestroyClick = (todo: Todos): void => {
    const todos = this.state.todos.slice();
    this.setState({
      todos: todos.filter(t => t.todo !== todo.todo)
    });
  };

  handleCompletedChange = (todo: Todos): void => {
    const todos = this.state.todos.slice();
    const newTodo = todos.map(t => {
      if (t.todo === todo.todo) {
        t.completed = !todo.completed;
      }

      return t;
    });
    this.setState({
      todos: newTodo
    });
  };

  handleEditTodo = (oldTodo: Todos, newTodo: string): void => {
    if (newTodo) {
      const todos = this.state.todos.slice();
      const nTodo = todos.map(t => {
        if (t.todo === oldTodo.todo) {
          t.todo = newTodo;
          t.editing = false;
        }
        return t;
      });
      this.setState({
        todos: nTodo
      });
    }
  };
  handleToggleAll = (e: any): void => {
    const todos = this.state.todos.slice();

    const newTodo = todos.map(todo => {
      todo.completed = e.target.checked;
      return todo;
    });
    this.setState({
      todos: newTodo
    });
  };

  handleNewTodo = (todo: string): void => {
    if (todo) {
      const todos = this.state.todos.slice();

      todos.unshift({
        todo,
        completed: false,
        editing: false
      });

      this.setState({ todos });
    }
  };

  handleEditingTodo = (todo: Todos): void => {
    const todos = this.state.todos.slice();

    const newTodo = todos.map(t => {
      t.editing = t.todo === todo.todo && !todo.editing;
      return t;
    });

    this.setState({
      todos: newTodo
    });
  };

  render() {
    const { todos, actions } = this.state;

    const selected = actions.filter(action => action.selected)[0];

    return (
      <section className="todoapp" ref={this.sectionRef}>
        <TodoHeader onAddTodo={this.handleNewTodo} />
        <TodoBody
          todos={todos}
          filter={selected.action}
          onDestroyClick={this.handleDestroyClick}
          onCompletedChange={this.handleCompletedChange}
          onEditTodo={this.handleEditTodo}
          onToggleAll={this.handleToggleAll}
          onEditingTodo={this.handleEditingTodo}
        />
        <TodoFooter
          IncompletedItemsLength={this.getIncompetedItemsLength()}
          actions={actions}
          onFilterClick={this.handleFilterClick}
          onClearCompletedClick={this.handleClearCompletedClick}
        />
      </section>
    );
  }
}

export default Todo;
