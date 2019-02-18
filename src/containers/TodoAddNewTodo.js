// @flow
import React from 'react';
import { connect } from 'react-redux';
import {addTodo} from '../actions'


const handleTodoChange = (e, dispatch, input) => {

  if (e.key === 'Enter'){
    dispatch(addTodo(input && input.value))
    input.value = ''
  }

}
  
const AddNewTodo = ({dispatch}) => {

  let input;

  return (
      <input
          className="new-todo"
          placeholder="What needs to be done?"
          ref={node => input = node}
          value={input && input.value.trim()}
          onKeyUp={(e) => handleTodoChange(e, dispatch, input)}
      />


    
  )

}



export default connect()(AddNewTodo);
