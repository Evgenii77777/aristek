import React, { useState } from "react";
import style from "./TodoEditor.module.css";

const TodoEditor = (props) => {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(message);
    if (message === "" || message === " ") {
      alert("Input cannot be empty");
      return;
    } else {
      props.onSubmit(message);
      setMessage("");
    }
  };

  return (
    <div className={style.container}>
      <form className={style.TodoEditor} onSubmit={handleSubmit}>
        <input
          name="textInput"
          className={style.TodoEditor__textarea}
          value={message}
          onChange={handleChange}
          placeholder="+ Add a task, press Enter to save"
        ></input>
        <button type="submit" className={style.TodoEditor__button}>
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoEditor;
