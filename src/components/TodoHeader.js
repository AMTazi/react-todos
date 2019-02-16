// @flow
import React from 'react';
import TodoAddNewTodo from './TodoAddNewTodo';
import Logo from '../Logo';

type Props = {
  onAddTodo: (newTodo: string) => void
};

const TodoHeader = (props: Props) => (
  <header className="header">
    <div>
      <h1>
        t{<Logo className="App-logo" />}d{<Logo className="App-logo-reverse" />}s
      </h1>
    </div>
    <TodoAddNewTodo onAddTodo={props.onAddTodo} />
  </header>
);

export default TodoHeader;
