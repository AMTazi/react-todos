// @flow
import { connect } from 'react-redux';
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, visibilityFilter) => {

    switch (visibilityFilter) {
        case "SHOW_COMPLETED": 
            return todos.filter(todo => todo.completed)
        
        case "SHOW_ACTIVE": 
            return todos.filter(todo => !todo.completed)
        
        default:
            return todos;
    }
}


const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibility)
})

export default connect(
    mapStateToProps
)(TodoList)
