// @flow
import { connect } from 'react-redux';
import TodoItem from '../components/TodoItem'
import {toggleTodo, destroyTodo, toggleEditTodo, editTodo} from '../actions'

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  destroyTodo: id => dispatch(destroyTodo(id)),
  toggleEditTodo: id => dispatch(toggleEditTodo(id)),
  editTodo: (id, newTodo) => dispatch(editTodo(id, newTodo)),
})

export default connect(
    null,
    mapDispatchToProps
)(TodoItem)
