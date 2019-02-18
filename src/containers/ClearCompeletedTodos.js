// @flow
import React from 'react';
import { connect } from 'react-redux';

const ClearCompeletedTodos = ({dispatch}) => (
  
   <button
          className="clear-completed"
          onClick={() => dispatch({type: "CLEAR_COMPLETED_TODOS"})}
    >
        Clear completed
    </button>
);

export default connect()(ClearCompeletedTodos)
