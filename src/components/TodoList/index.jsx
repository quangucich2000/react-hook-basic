import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    todos: PropTypes.array,
    onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
    todos: [],
    onTodoClick: null,
}


function TodoList(props) {
    const { todos, onTodoClick } = props;


    function onTodoItemClick(todo) {
        if (onTodoClick) {
            onTodoClick(todo);
        }
    }

    return (
        <div className="todo-list">
            <ul>
                {
                    todos.map(todo => (
                        <li
                            key={todo.id}
                            onClick={() => onTodoItemClick(todo)}
                        >
                            {todo.title}
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default TodoList;