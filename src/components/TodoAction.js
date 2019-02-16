// @flow
import React, { Component } from 'react';
import type { Action } from '../custom-definitions/definitions';

type Props = {
  action: Action,
  onClick: (action: string) => void
};

class TodoAction extends Component<Props> {
  handleClick = (e: any) => {
    e.preventDefault();

    this.props.onClick(this.props.action.action);
  };

  render() {
    const { action } = this.props;

    return (
      <li>
        <a
          className={action.selected ? 'selected' : ''}
          href="#/"
          onClick={this.handleClick}
        >
          {action.text}
        </a>
      </li>
    );
  }
}

export default TodoAction;
