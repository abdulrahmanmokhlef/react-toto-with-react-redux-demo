import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchTodos } from "../redux/thunks";
import TodoItem from "./TodoItem";

function TodoList(props) {
  /* Destructure props */
  const { todoItems, fetch } = props;

  useEffect(() => {
    fetch();
    // eslint-disable-next-line
  }, []);

  return (
    <ul>
      {todoItems.map((todo) => (
        <li key={todo.id}>
          <TodoItem {...todo} />
        </li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state) => ({
  todoItems: state.todos.length !== 0 ? state.todos : []
});

const mapDispatchToProps = (dispatch) => ({
  fetch: () => dispatch(fetchTodos(1))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
