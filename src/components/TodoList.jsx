import { useContext } from "react";
import { TodoContext } from "../App";
import TodoItem from "./TodoItem";

export default function TodoList(
 {isDone}
) {
    const { todos, setTodos } = useContext(TodoContext);
    const filteredTodos = todos.filter(todo => todo.isDone === isDone);
    return (
        <div>
            <h2>{isDone ? 'Done' : 'Working...'}</h2>
            { filteredTodos.map(todo => <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />)}
        </div>
    );
}

