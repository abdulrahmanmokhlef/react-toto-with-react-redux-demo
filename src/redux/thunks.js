import API from "../api";
import { addTodo, loadTodos, removeTodo, toggleTodo } from "./actionCreators";

// Thunk function
export function fetchTodos(userId) {
  return async function (dispatch, getState) {
    const { data, status } = await API.getTodos(userId);

    if (status === 200) {
      dispatch(loadTodos(data));
    }
  };
}

export function handleCreateTodo(title, userId) {
  return async function (dispatch) {
    const newTodo = {
      id: new Date().toISOString(),
      completed: false,
      title,
      userId
    };

    const { status } = await API.createTodo(newTodo);

    console.log("create status: ", status);

    dispatch(addTodo(newTodo));
  };
}

export function handleRemoveTodo(id) {
  return async function (dispatch, getState) {
    const { status } = await API.removeTodo(id);
    console.log("delete status: ", status);

    dispatch(removeTodo(id));
  };
}

export function handleUpdateTodo(id) {
  return async function (dispatch, getState) {
    const { todos } = getState();
    const todoItem = todos.find((t) => t.id === id);

    const updatedTodo = {
      ...todoItem,
      completed: !todoItem.completed
    };

    const { status } = await API.updateTodo(updatedTodo);
    console.log("toggle status: ", status);

    dispatch(toggleTodo(id));
  };
}
