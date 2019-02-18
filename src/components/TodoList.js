// @flow
import React from 'react';
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

export default TodoList;
