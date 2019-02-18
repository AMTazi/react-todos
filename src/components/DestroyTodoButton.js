// @flow
import React from 'react'

const DestroyTodoButton = ({
    destroyTodo
}) => {
    return (
        <button className="destroy" onClick={destroyTodo} />
    )
}

export default DestroyTodoButton;