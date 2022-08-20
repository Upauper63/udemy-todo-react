import { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export function App() {
  const [incompleteTodos, setIncompleteTodos] = useState([
    "未完了Todo1",
    "未完了Todo2"
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "完了済みのTodo1",
    "完了済みのTodo2"
  ]);
  const [todoText, setTodoText] = useState("");
  const onChangeTodoText = (e) => {
    setTodoText(e.target.value);
  };
  const onClickAdd = () => {
    if (todoText === "") return;
    // const newTodos = [...incompleteTodos, todoText];
    // setIncompleteTodos(newTodos);
    setIncompleteTodos([...incompleteTodos, todoText]);
    setTodoText("");
  };
  const onClickDelete = (idx) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(idx, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComplete = (idx) => {
    onClickDelete(idx);
    setCompleteTodos([...completeTodos, incompleteTodos[idx]]);
  };
  const onClickBack = (idx) => {
    const newTodos = [...completeTodos];
    newTodos.splice(idx, 1);
    setCompleteTodos(newTodos);
    setIncompleteTodos([...incompleteTodos, completeTodos[idx]]);
  };
  return (
    <>
      <InputTodo
        todoText={todoText}
        onChangeTodoText={onChangeTodoText}
        onClickAdd={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {incompleteTodos.length >= 5 && <p>登録できるTodoは5コまで</p>}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
    </>
  );
}
