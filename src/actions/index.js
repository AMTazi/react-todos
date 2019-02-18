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