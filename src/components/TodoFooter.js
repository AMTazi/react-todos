// @flow
import React, { Component } from 'react';
import TodoAction from './TodoAction';
import type { Action } from '../custom-definitions/definitions';

type Props = {
  IncompletedItemsLength: number,
  actions: Array<Action>,
  onFilterClick: (action: string) => void,
  onClearCompletedClick: () => void
};

class TodoFooter extends Component<Props> {
  handleClick = (action: string) => {
    this.props.onFilterClick(action);
  };

  render() {
    const actions = this.props.actions.map(action => (
      <TodoAction
        key={action.action}
        action={action}
        onClick={this.handleClick}
      />
    ));
    const { IncompletedItemsLength } = this.props;

    return (
      <footer className="footer">
        <span className="todo-count">
          <strong>{IncompletedItemsLength}</strong> item left
        </span>
        <ul className="filters">{actions}</ul>
        <button
          className="clear-completed"
          onClick={this.props.onClearCompletedClick}
        >
          Clear completed
        </button>
      </footer>
    );
  }
}

export default TodoFooter;
