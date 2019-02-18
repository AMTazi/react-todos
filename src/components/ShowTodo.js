// @flow
import React from 'react'

const ShowTodo = ({
    text,
    toggleEditTodo
}) => {
    return (
        <label onDoubleClick={toggleEditTodo}>{text}</label>
    )
}

export default ShowTodo;