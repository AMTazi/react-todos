// @flow
import React from 'react';
import PropTypes from 'prop-types'

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

TodoFilters.propTypes = {
    active: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    setVisibilityFilter: PropTypes.func.isRequired
}

export default TodoFilters;
