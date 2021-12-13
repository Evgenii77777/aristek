import React from "react";
import style from "./TodoList.module.css";
import { ReactComponent as Trash } from "../../img/delete.svg";

const TodoList = ({ todos, onDeleteTodo, onToggleCompleted }) => (
  <ul className={style.TodoList}>
    {todos.map(({ id, title, completed }) =>
      completed ? (
        <li key={id} className={style.TodoList__itemcompleted}>
          <input
            type="checkbox"
            className={style.TodoList__checkbox}
            checked={completed}
            onChange={() => onToggleCompleted(id)}
          />

          <p className={style.TodoList__textcompited}>{title}</p>
          <button
            type="button"
            className={style.TodoList__btn}
            onClick={() => onDeleteTodo(id)}
          >
            <Trash />
          </button>
        </li>
      ) : (
        ""
      )
    )}
  </ul>
);

export default TodoList;
