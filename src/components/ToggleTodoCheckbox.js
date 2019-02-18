// @flow
import React from 'react';

const ToggleTodoCheckbox = ({
    completed,
    toggleTodo
}) => {
    return (
        <input
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={toggleTodo}
        />
    )
}

export default ToggleTodoCheckbox;