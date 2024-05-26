import { createContext, useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoListWrapper from "./components/TodoListWrapper";

export const TodoContext = createContext(null);

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <TodoContext.Provider value={{ todos, setTodos }}>
      <TodoForm />
      <TodoListWrapper />
    </TodoContext.Provider>
  );
}
