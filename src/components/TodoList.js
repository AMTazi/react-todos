// @flow
import React from 'react';
import PropTypes from 'prop-types'
import TodoItem from '../containers/AlterTodo';


const TodoList = ({
    todos
}) => (
     <ul className="todo-list">
        {
        todos.map(todo => (
            <TodoItem
                key={todo.id}
                {...todo}
            />
        ))
        }
    </ul>
);


TodoList.propTypes = {
  todos: PropTypes.arrayOf(
      PropTypes.shape({
            id: PropTypes.number, 
            text: PropTypes.string,
            editing: PropTypes.bool, 
            completed: PropTypes.bool, 
      }).isRequired
  ).isRequired
}

export default TodoList;
