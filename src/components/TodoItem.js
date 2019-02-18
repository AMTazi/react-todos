// @flow
import React from 'react';
import TodoEditInput from './TodoEditInput';
import ToggleTodoCheckbox from './ToggleTodoCheckbox';
import ShowTodo from './ShowTodo';
import DestroyTodoButton from './DestroyTodoButton';

const classnames = require('classnames');

const TodoItem  = ({ 
  id, 
  text, 
  completed, 
  editing, 
  toggleTodo,
  editTodo, 
  destroyTodo, 
  toggleEditTodo
}) => {

    const className = classnames({
      completed,
      editing
    });

    return (

      <li className={className}>

        <div className="view">

          <ToggleTodoCheckbox  completed={completed} toggleTodo={() => toggleTodo(id)} />

          <ShowTodo text={text} toggleEditTodo={() => toggleEditTodo(id)} />

          <DestroyTodoButton destroyTodo={() => destroyTodo(id)} />

        </div>

        <TodoEditInput id={id} text={text} editTodo={editTodo} toggleEditTodo={toggleEditTodo} />

      </li>
    );
}

export default TodoItem;
