// @flow
import React from 'react';
import TodoAddNewTodo from '../containers/TodoAddNewTodo';
import Logo from '../Logo';


const TodoHeader = () => (
  <header className="header">
    <div>
      <h1>
        t{<Logo className="App-logo" />}d{<Logo className="App-logo-reverse" />}s
      </h1>
    </div>

    <TodoAddNewTodo />
    
  </header>
);

export default TodoHeader;
