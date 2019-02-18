// @flow
import { connect } from 'react-redux';
import TodoItem from '../components/TodoItem'



const toggleTodo = (id) => ({
    type: "TOGGLE_TODO",
    id
})

const destroyTodo = (id) => ({
    type: "DESTROY_TODO",
    id
})

const toggleEditTodo = (id) => ({
    type: "TOGGLE_EDIT_TODO",
    id
})

const editTodo = (id, newTodo) => ({
    type: "EDIT_TODO",
    newTodo,
    id
})

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
