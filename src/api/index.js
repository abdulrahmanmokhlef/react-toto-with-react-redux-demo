import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos";

const API = {};

API.getTodos = (userId) => {
  return axios.get(`${url}?userId=${userId}`);
};

API.createTodo = (todoItem) => {
  return axios.post(`${url}`, { ...todoItem });
};

API.removeTodo = (id) => {
  return axios.delete(`${url}/${id}`);
};

API.updateTodo = (todoItem) => {
  return axios.patch(`${url}/${todoItem.id}`, { ...todoItem });
};

export default API;
