// @flow
import React from 'react';
import { connect } from 'react-redux';
import {clearCompletedTodo} from '../actions'

const ClearCompeletedTodos = ({dispatch}) => (
  
   <button
          className="clear-completed"
          onClick={() => dispatch(clearCompletedTodo())}
    >
        Clear completed
    </button>
);

export default connect()(ClearCompeletedTodos)
