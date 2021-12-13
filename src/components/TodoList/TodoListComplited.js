import React from "react";
import style from "./TodoList.module.css";
import { ReactComponent as Trash } from "../../img/delete.svg";
import { ReactComponent as Edit } from "../../img/edit.svg";
import { ReactComponent as Copy } from "../../img/copy.svg";
const TodoListComplited = ({
  todos,
  onDeleteTodo,
  onToggleCompleted,
  copyTodo,
  dis,
  handleInputChange,
}) => {
  return (
    <ul className={style.TodoList}>
      {todos.map(({ id, title, completed }) =>
        !completed ? (
          <li key={id} className={style.TodoList__item}>
            <input
              type="checkbox"
              className={style.TodoList__checkbox}
              checked={completed}
              onChange={() => onToggleCompleted(id)}
            />
            <input
              name="edit"
              disabled={dis}
              className={style.TodoList__text}
              placeholder={title}
            ></input>
            <div className={style.btn__wrapper}>
              <button
                type="button"
                className={style.TodoList__btn}
                onClick={(e) => handleInputChange()}
              >
                <Edit />
              </button>
              <button
                type="button"
                className={style.TodoList__btn}
                onClick={() => copyTodo(id)}
              >
                <Copy />
              </button>
              <button
                type="button"
                className={style.TodoList__btn}
                onClick={() => onDeleteTodo(id)}
              >
                <Trash />
              </button>
            </div>
          </li>
        ) : (
          ""
        )
      )}
    </ul>
  );
};

export default TodoListComplited;
