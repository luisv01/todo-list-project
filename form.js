function TodoForm({ addTodo }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault(); //with preventDefault() you prevent the page to reload when submitting the form (which is the default behaviour of forms)
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div class="input-group mb-3">
        <input
          type="text"
          className="form-control"
          value={value}
          placeholder="Add todo..."
          onChange={(e) => setValue(e.target.value)}
        />
        <button class="btn btn-outline-primary">Add Todo</button>
      </div>
    </form>
  );
}
