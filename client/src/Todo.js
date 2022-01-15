import {Button} from "react-bootstrap";
import React from "react";

export const Todo = ({todo, todoId, markTodo, removeTodo}) => {
    return (
        <div className="todo">
            <span style={{textDecoration: todo.state === 'COMPLETED' ? "line-through" : ""}}>{todo.text}</span>
            <div>
                <Button variant="outline-success" onClick={() => markTodo(todoId)}>✓</Button>{' '}
                <Button variant="outline-danger" onClick={() => removeTodo(todoId)}>✕</Button>
            </div>
        </div>
    );
}