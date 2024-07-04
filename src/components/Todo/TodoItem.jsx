import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleComplete } from '../../store/slices/todoSlice';


const TodoItem = ({ todo }) => {
    const dispatch = useDispatch();

    return (
        <li className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => dispatch(toggleComplete(todo.id))}
            />
            {todo.title}
        </li>
    );
};

export default TodoItem;
