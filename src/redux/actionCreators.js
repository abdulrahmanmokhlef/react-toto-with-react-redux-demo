export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const LOAD_TODOS = "LOAD_TODOS";

export function loadTodos(todos) {
  return {
    type: LOAD_TODOS,
    payload: {
      todos
    }
  };
}

export function addTodo(todoItem) {
  return {
    type: ADD_TODO,
    payload: {
      todoItem
    }
  };
}

export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: { id }
  };
}

export function removeTodo(id) {
  return {
    type: REMOVE_TODO,
    payload: { id }
  };
}
