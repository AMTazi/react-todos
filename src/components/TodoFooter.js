// @flow
import React from 'react';
import TodoCounter from '../containers/TodoCounter';
import ClearCompeletedTodos from '../containers/ClearCompeletedTodos';
import TodoFilters from './TodoFilters';

const TodoFooter = () => (

   <footer className="footer">

        <TodoCounter />

        <TodoFilters />

        <ClearCompeletedTodos />

    </footer>
    
)

export default TodoFooter;
