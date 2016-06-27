const todos = [
    {
        id: 1,
        title: 'Go grocery shopping',
        description: 'Make sure you go to Petsmart on your way back.',
        isComplete: false,
        priority: 'high'
    },
    {
        id: 2,
        title: 'Finish the user interface of the application',
        description: 'Rush!',
        isComplete: false,
        priority: 'medium'
    },
    {
        id: 3,
        title: 'Pick nicer colors',
        description: 'You gotta change them colors',
        isComplete: false,
        priority: 'low'
    }
]

const obj = {isFetching: false, todos: todos};

export default obj;
