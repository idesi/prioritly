export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo
});

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
});

export const changePriority = (id, newPriority) => ({
    type: 'CHANGE_PRIORITY',
    id,
    newPriority
});

export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    id
});

export const updateTodo = (todo) => ({
    type: 'UPDATE_TODO',
    todo
});

export const setVisbilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});
