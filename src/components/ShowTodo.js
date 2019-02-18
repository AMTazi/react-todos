// @flow
import React from 'react'
import PropTypes from 'prop-types'

const ShowTodo = ({
    text,
    toggleEditTodo
}) => {
    return (
        <label onDoubleClick={toggleEditTodo}>{text}</label>
    )
}

ShowTodo.propTypes = {
    text: PropTypes.string.isRequired,
    toggleEditTodo: PropTypes.func.isRequired
}

export default ShowTodo;