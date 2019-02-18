// @flow
import React from 'react'
import PropTypes from 'prop-types'

const DestroyTodoButton = ({
    destroyTodo
}) => {
    return (
        <button className="destroy" onClick={destroyTodo} />
    )
}

DestroyTodoButton.propTypes = {
  destroyTodo: PropTypes.func.isRequired
}

export default DestroyTodoButton;