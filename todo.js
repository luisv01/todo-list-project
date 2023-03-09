function Todo({ todo, index, remove }) {
  const handle = () => {
    remove(index);
  };
  return (
    <div className="todo container">
      {todo.text}{' '}
      <button onClick={handle} className="btn btn-danger">
        Remove
      </button>
    </div>
  );
}
