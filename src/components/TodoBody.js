// @flow
import React from 'react';
import TodoToggleAll from '../containers/TodoToggleAll';
import VisibleTodos from '../containers/VisibleTodos';


const TodoBody = () => (

  <section className="main">
  
    <TodoToggleAll />

    <VisibleTodos />

  </section>

);

export default TodoBody;
