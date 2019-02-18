export const VisibilityFilters = [
    
    {
        text:"Show All",
        value: "SHOW_ALL"
    },
    
    {
        text:"Show Completed",
        value: "SHOW_COMPLETED"
    },

    {
        text:"Show Active",
        value: "SHOW_ACTIVE"
    },

]

// Todos actions creator

let  todosIDs = 0;

export const addTodo = (text) => {
    return {
        type: "ADD_TODO",
        id: todosIDs++,
        text,
        completed: false,
        editing: false,
    }
}

export const toggleTodo = (id) => {
    return {
        type: "TOGGLE_TODO",
        id
    }
}

export const toggleAll = (completed) => {
    return {
        type: "TOGGLE_ALL",
        completed
    }
}

export const editTodo = (id, newTodo) => {
    return {
        type: "EDIT_TODO",
        id,
        newTodo
    }
}

export const destroyTodo = (id) => {
    return {
        type: "DESTROY_TODO",
        id
    }
}

export const clearCompletedTodo = () => {
    return {
        type: "CLEAR_COMPLETED_TODOS"
    }
}

export const toggleEditTodo = (id) => {
    return {
        type: "TOGGLE_EDIT_TODO",
        id
    }
}

// Visibility filter actions creator

export const setVisibilityFilter = (filter) => {
    return {
        type: "SET_VISIBILITY_FILTER",
        filter
    }
}
