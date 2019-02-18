// @flow
import React from 'react';

const TodoFilters = ({
    active,
    text,
    value,
    setVisibilityFilter
}) => (
    <a
        className={active ? 'selected' : ''}
        href="#/"
        onClick={(e) => {
            e.preventDefault()
            setVisibilityFilter()
            
        }}
    >
        {text}
    </a>
);

export default TodoFilters;
