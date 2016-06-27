//todos reducers deals with the entire state and delegates the actions to
//the todo reducer
const todo = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                _id: action.todo._id,
                title: action.todo.title,
                description: action.todo.description || '',
                isComplete: false,
                priority: action.todo.priority
            }
        case 'TOGGLE_TODO':
             if (state._id !== action._id) {
                 return state;
             }
            return Object.assign({}, state, action.todo);
        case 'DELETE_TODO':
            if (state._id !== action.id) {
                return state;
            }
            break;
        case 'UPDATE_TODO':
            if (state._id !== action.todo._id) {
                return state;
            }

           return Object.assign({}, state, action.todo);
       case 'CHANGE_PRIORITY':
            if (state._id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {priority: action.priority});
        default:
            return state;
    }
}

const todos = (state=[], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, todo(undefined, action)];
        case 'TOGGLE_TODO':
        case 'DELETE_TODO':
        case 'UPDATE_TODO':
        case 'CHANGE_PRIORITY':
            let nstate = state.map((item) => {
                return todo(item, action);
            });
            return nstate;
        case 'TODOS_SUCCESS':
            return action.todos;
        case 'TODOS_REQUEST':
            return [];
        default:
            return state;
    }
}

export default todos;
