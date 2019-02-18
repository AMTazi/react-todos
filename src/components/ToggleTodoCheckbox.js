// @flow
import React from 'react';
import PropTypes from 'prop-types'

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

ToggleTodoCheckbox.propTypes = {
  completed: PropTypes.bool.isRequired, 
  toggleTodo: PropTypes.func.isRequired, 
}


export default ToggleTodoCheckbox;