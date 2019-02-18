// @flow
import React from 'react';
import { connect } from 'react-redux';

const TodoCounter = ({count}) => (
  
    <span className="todo-count">
        <strong>{count}</strong> item left
    </span>
);

const getIncompletedTodos = (todos) => todos.filter(todo => !todo.completed).length

const mapStateToProps = state => ({
    count: getIncompletedTodos(state.todos)
})

export default connect(mapStateToProps)(TodoCounter)
