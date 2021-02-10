import Todo from './Todo';

const Todos = ({ todos, handleDelete, handleCompleted }) => {
  return (
    <div>
      <Todo
        todos={todos}
        handleDelete={handleDelete}
        handleCompleted={handleCompleted}
      />
    </div>
  );
};

export default Todos;
