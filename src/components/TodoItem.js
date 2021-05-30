import { connect } from "react-redux";
import { handleRemoveTodo, handleUpdateTodo } from "../redux/thunks";

function TodoItem(props) {
  /* Destructure props */
  const { id, title, completed, remove, toggle } = props;

  return (
    <div>
      <p>{title}</p>
      <button onClick={(e) => remove(id)}>Delete</button>
      <input type="checkbox" value={completed} onChange={(e) => toggle(id)} />
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  remove: (id) => dispatch(handleRemoveTodo(id)),
  toggle: (id) => dispatch(handleUpdateTodo(id))
});

export default connect(null, mapDispatchToProps)(TodoItem);
