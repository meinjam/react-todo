import Todo from './Todo';

const Todos = ({ todos, handleDelete, handleCompleted, filterTodo }) => {
  return (
    <div>
      <Todo
        todos={todos}
        handleDelete={handleDelete}
        handleCompleted={handleCompleted}
        filterTodo={filterTodo}
      />
    </div>
  );
};

export default Todos;
