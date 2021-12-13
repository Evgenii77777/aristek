import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList/TodoList";
import TodoListComplited from "./components/TodoList/TodoListComplited";
import TodoEditor from "./components/TodoEditor/TodoEditor";
import todosApi from "./service/todos-api";
import AppBar from "./components/AppBar/AppBar";
import { ReactComponent as Menu } from "./img/menu.svg";
import style from "./App.module.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [dis, setDis] = useState(true);

  const handleInputChange = () => {
    setDis(!dis);
  };

  useEffect(() => {
    todosApi
      .fetchTodos()
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
  }, []);

  const addTodo = (title) => {
    const todoData = {
      userId: 1,
      title,
      completed: false,
    };
    todosApi.addTodo(todoData).then((todo) => {
      const newTodo = [
        ...todos,
        {
          ...todo,
          id: Math.random() * (150 - 25) + 25,
        },
      ];
      setTodos(newTodo);
    });
  };

  const deleteTodo = (todoId) => {
    let newTodos = [...todos];
    todosApi.deleteTodo(todoId).then(() => {
      newTodos = newTodos.filter(({ id }) => id !== todoId);
      setTodos(newTodos);
    });
  };

  const copyTodo = (todoId) => {
    let newTodo = {};
    todos.forEach((todo) => {
      let newId = 0;
      if (todoId === todo.id) {
        newId += Math.random() * (150 - 25) + 25;
        newTodo = [
          ...todos,
          (newTodo = {
            ...todo,
            id: newId,
          }),
        ];
      }
    });
    setTodos(newTodo);
  };

  const toggleCompleted = (todoId) => {
    const todo = todos.find(({ id }) => id === todoId);
    const { completed } = todo;
    const update = { completed: !completed };

    todosApi.updateTodo(todoId, update).then(() => {
      const newTodo = todos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      );
      setTodos(newTodo);
    });
  };

  const calculateCompletedTodos = () => {
    return todos.reduce(
      (total, todo) => (todo.completed ? total + 1 : total),
      0
    );
  };

  const totalTodoCount = todos.length;
  const completedTodoCount = calculateCompletedTodos();
  const visibleTodos = todos;
  const todo = totalTodoCount - completedTodoCount;

  return (
    <>
      <AppBar />
      <div className={style.container}>
        <div className={style.container__menu}>
          <Menu className={style.menu} />
        </div>
        <div className={style.wrapper}>
          <div className={style.media__wrapper}>
            <TodoEditor onSubmit={addTodo} />
            <div className={style.text__wrapper}>
              <p className={style.text}>Total:{totalTodoCount}</p>
            </div>
            <p className={style.header}>To Do({todo})</p>
            <TodoListComplited
              handleInputChange={handleInputChange}
              dis={dis}
              copyTodo={copyTodo}
              todos={visibleTodos}
              onDeleteTodo={deleteTodo}
              onToggleCompleted={toggleCompleted}
            />
          </div>
          <div className={style.container__completed}>
            <p className={style.text__completed}>
              Completed({completedTodoCount})
            </p>
            <TodoList
              todos={visibleTodos}
              onDeleteTodo={deleteTodo}
              onToggleCompleted={toggleCompleted}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
