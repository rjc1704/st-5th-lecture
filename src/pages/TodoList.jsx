import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addTodo } from "../redux/slices/todoSlice";

export default function TodoList() {
  console.log("TodoList 페이지 렌더링");
  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const [content, setContent] = useState("");

  const newTodo = {
    id: crypto.randomUUID(),
    content,
  };

  const onChangeTodo = (event) => {
    setContent(event.target.value);
  };
  const onSubmitTodo = (event) => {
    event.preventDefault();
    dispatch(addTodo(newTodo));
    setContent("");
  };
  return (
    <div>
      <h1>SIMPLE TODO LIST 페이지</h1>
      <form onSubmit={onSubmitTodo}>
        <label>투두 내용 :</label>
        <input name="todo" value={content} onChange={onChangeTodo} />
        <button>추가</button>
      </form>
      <ul>
        {todos.map((todo, idx) => (
          <li key={todo.id}>
            <div>
              할일{idx + 1}: {todo.content}
            </div>
          </li>
        ))}
      </ul>
      <Link to={"/auth"}>AUTH 페이지로 이동</Link>
    </div>
  );
}
