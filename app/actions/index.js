export const todosRequest = 'TODOS_REQUEST';
export const todosRequestSuccess = 'TODOS_SUCCESS';
export const todosRequestFailure = 'TODOS_FAULURE';
// Do this in every file where you use `fetch`
import fetch from 'isomorphic-fetch';

export function fetchTodos() {
  return function (dispatch) {
    dispatch(requestTodos)
    return fetch('/api/todos')
      .then(response => {
          console.log(response);
          return response.json();
      })
      .then(json => {
        console.log(json);
        return dispatch(receiveTodos(json));
        }
      )
  }
}

export function postTodo(todo) {
    return function(dispatch) {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        return fetch('/api/todos', {
            method: 'POST',
            headers: myHeaders,
            mode: 'same-origin',
            cache: 'default',
            body: JSON.stringify(todo)
        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            return dispatch(addTodo(json));
        })
    }
}

export function updateIsComplete(todo){
    return function(dispatch){
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        todo.isComplete = !todo.isComplete;

        return fetch('/api/todos/' + todo._id, {
            method: 'PUT',
            headers: myHeaders,
            mode: 'same-origin',
            cache: 'default',
            body: JSON.stringify(todo)
        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            return dispatch(toggleTodo(json));
        })
    }
}

export function putTodo(todo) {
    return function(dispatch) {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');
        console.log('Updating', todo);
        return fetch('/api/todos/' + todo._id, {
            method: 'PUT',
            headers: myHeaders,
            mode: 'same-origin',
            cache: 'default',
            body: JSON.stringify(todo)
        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            return dispatch(updateTodo(json));
        })
    }
}

export function destroyTodo(id) {
    return function(dispatch) {
        var myHeaders = new Headers();
        myHeaders.append('Content-Type', 'application/json');

        return fetch('/api/todos/' + id, {
            method: 'DELETE',
            headers: myHeaders,
            mode: 'same-origin',
            cache: 'default'
        })
        .then(response => {
            return response.json();
        })
        .then(json => {
            return dispatch(deleteTodo(json));
        })
    }
}

export const requestTodos = () => {
    type: todosRequest
}

export const receiveTodos = (json) => ({
    type: todosRequestSuccess,
    todos: json
})

export const requestTodosFailed = () => {
    type: todosRequestFailure
}

export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    todo
});

export const toggleTodo = (todo) => {
    return {
        type: 'TOGGLE_TODO',
        todo
    }
};

export const changePriority = (id, newPriority) => ({
    type: 'CHANGE_PRIORITY',
    id,
    newPriority
});

export const deleteTodo = (todo) => ({
    type: 'DELETE_TODO',
    id: todo._id
});

export const updateTodo = (todo) => {
    console.log('updae from server', todo);
    return {
        type: 'UPDATE_TODO',
        todo
    }
};

export const setVisbilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});
