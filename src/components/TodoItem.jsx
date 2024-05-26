export default function TodoItem({ todo, setTodos }) {
    const {title, content, isDone} = todo;
    const deleteTodo = () => {
        setTodos(prevTodos => prevTodos.filter(item => item.id !== todo.id));
    }
    const toggleTodo = () => {
        setTodos(prevTodos => prevTodos.map(item => item.id === todo.id ? {...item, isDone: !item.isDone} : item));
    }
    return (
        <div style={{border: "1px solid black"}}>
            <h3>{title}</h3>
            <p>{content}</p>
            <button onClick={toggleTodo}>{isDone ? '취소' : '완료'}</button>
            <button onClick={deleteTodo}>삭제</button>
        </div>
    );
}

