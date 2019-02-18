// @flow
import React from 'react';
import FilterLink from '../containers/FilterLink';
import {VisibilityFilters} from '../actions'

const TodoFilters = () => (
  <ul className="filters">{
    VisibilityFilters.map(filter => (
      <FilterLink
        key={filter.value}
        {...filter}
      />
    ))
  }</ul>
);

export default TodoFilters;
