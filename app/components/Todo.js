import React, {PropTypes} from 'react';
import {Link} from 'react-router';
import {ListItem} from 'material-ui/List';
import EditIcon from 'material-ui/svg-icons/editor/mode-edit';
const styles ={
    low: {
        color: 'rgb(204, 204, 204)'
    },
    medium: {
        color: 'rgb(0, 188, 212)'
    },
    high: {
        color: 'rgb(255,64,129)'
    },
    completed: {
        textDecoration: 'line-through',
        color: 'rgb(204, 204, 204)'
    }
}

const Todo = ({id, onClick, title, isComplete, priority, description,
    // onTodoSave
}) => {
    return (
        <div>
        <Link
            to={'/todo/' + id}
        >
            <EditIcon />
        </Link>

            <ListItem
                primaryText={`${title} (${priority.toUpperCase()})`}
                onClick ={onClick}
                secondaryText={isComplete ? 'Complete' : 'Active'}
                style={isComplete ? styles['completed'] : styles[priority]}
            />
        </div>


)};

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    priority: PropTypes.string.isRequired
}

export default Todo;
