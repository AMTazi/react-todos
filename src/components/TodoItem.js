// @flow
import React from 'react';
import PropTypes from 'prop-types'
const classnames = require('classnames');

import TodoEditInput from './TodoEditInput';
import ToggleTodoCheckbox from './ToggleTodoCheckbox';
import ShowTodo from './ShowTodo';
import DestroyTodoButton from './DestroyTodoButton';

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

TodoItem.propTypes = {
  id: PropTypes.number.isRequired, 
  text: PropTypes.string.isRequired,
  editing: PropTypes.bool.isRequired, 
  completed: PropTypes.bool.isRequired, 
  toggleEditTodo: PropTypes.func.isRequired,
  destroyTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired, 
  editTodo: PropTypes.func.isRequired,
}


export default TodoItem;
