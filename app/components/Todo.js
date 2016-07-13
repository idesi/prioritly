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
        color: 'rgb(255,64,129)',
        float: 'left'
    },
    completed: {
        textDecoration: 'line-through',
        color: 'rgb(204, 204, 204)'
    }
}

const Todo = ({_id, onClick, title, isComplete, priority, description}) => {
    return (
        <div style={{clear: 'both'}}>


            <ListItem
                primaryText={`${title} (${priority.toUpperCase()})`}
                onClick ={onClick}
                secondaryText={isComplete ? 'Complete' : 'Active'}
                style={isComplete ? styles['completed'] : styles[priority]}
            />
            <Link
                to={'/todo/' + _id}
                style={{width: '20px', marginTop: '20px'}}
            >
                <EditIcon />
            </Link>
        </div>


)};

Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired,
    priority: PropTypes.string.isRequired
}

export default Todo;
