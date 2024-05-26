import { useContext, useState } from "react";
import { TodoContext } from "../App";

export default function TodoForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const { setTodos } = useContext(TodoContext);
    const addTodo = (e) => {
        e.preventDefault();
        const newTodo = { id: Date.now(), title, content, isDone: false };
        setTodos(prevTodos => [newTodo, ...prevTodos]);
        setTitle('');
        setContent('');
    }
    
    return (
        <form onSubmit={addTodo}>
            <input type="text" placeholder="제목" value={title} onChange={e => setTitle(e.target.value)} />
            <input type="text" placeholder="내용" value={content} onChange={e => setContent(e.target.value)} />
            <button>추가</button>
        </form>
    );
}