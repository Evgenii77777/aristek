/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/posts";

const fetchTodos = () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users/1/todos")
    .then((response) => response);
};
console.log(fetchTodos());

const addTodo = (todo) => {
  return axios
    .post("https://jsonplaceholder.typicode.com/posts", todo)
    .then((response) => response.data);
};

const deleteTodo = (todoId) => {
  return axios.delete(`https://jsonplaceholder.typicode.com/posts/${todoId}`);
};

const updateTodo = (todoId, update) => {
  return axios
    .patch(`https://jsonplaceholder.typicode.com/posts/${todoId}`, update)
    .then(({ data }) => data);
};

export default { fetchTodos, addTodo, deleteTodo, updateTodo };
