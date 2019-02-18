//@flow
const todos = (state = [], action)  => {

    switch (action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    editing: false,
                    completed: false,
                }
            ]
        
        case "TOGGLE_TODO":
            return state.map(todo => (todo.id === action.id) ? {...todo, completed : !todo.completed } : todo);

        case "TOGGLE_ALL":
            return state.map(todo => ({...todo, completed: action.completed}));
       
        case "EDIT_TODO":
            return state.map(todo => (todo.id === action.id) ? {...todo, text: action.newTodo, editing : !todo.editing } : todo);
            
        case "DESTROY_TODO":
            return state.filter(todo => todo.id !== action.id);

        case "CLEAR_COMPLETED_TODOS":
            return state.filter(todo => !todo.completed);

        case "TOGGLE_EDIT_TODO":
            return state.map(todo => (todo.id === action.id) ? {...todo, editing : !todo.editing } : todo);

        default:
            return state;
    }
}

export default todos;