import { Container, Row, Col } from 'react-bootstrap';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Search from './components/Search';
import Todos from './components/Todos';
import Firebase from './Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';

const App = () => {
  const [title, setTitle] = useState('');
  const [loadingBtn, setLodingBtn] = useState(false);
  const [toggleAdd, setToggleAdd] = useState(false);
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');

  // Get Todo
  useEffect(() => {
    const todoRef = Firebase.database().ref('todos');
    todoRef.on('value', (item) => {
      const todos = item.val();
      const todoList = [];
      for (let id in todos) {
        todoList.push({ id, ...todos[id] });
      }
      // console.log(todoList);
      setTodos(todoList);
    });
  }, []);

  // Add Todo
  const addTodo = (e) => {
    e.preventDefault();
    const todoTitle = title.trim();
    if (todoTitle === '') {
      toast.error('Please enter some todo.', {
        autoClose: 3000,
      });
      return false;
    }
    setLodingBtn(true);
    const todo = {
      title: todoTitle,
      completed: false,
    };
    const todoRef = Firebase.database().ref('todos');
    todoRef.push(todo);
    toast.success('Todo added successfully.', {
      autoClose: 3000,
    });
    setLodingBtn(false);
    setToggleAdd(false);
    setTitle('');
  };

  // Update todo
  const handleCompleted = (todo) => {
    // console.log(todo);
    const todoRef = Firebase.database().ref('todos').child(todo.id);
    todoRef.update({
      completed: !todo.completed,
    });
  };

  // Delete Todo
  const handleDelete = (id) => {
    // console.log(id);
    const todoRef = Firebase.database().ref('todos').child(id);
    todoRef.remove();
    toast.success('Todo deleted successfully.', {
      autoClose: 3000,
    });
  };

  // Filter Todo
  const filterTodo = todos.filter((todo) => {
    return todo.title.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className='App'>
      <section className='py-5'>
        <Container className='todo'>
          <Row className='justify-content-center'>
            <Col md={7}>
              <div className='contents'>
                <Header toggleAdd={toggleAdd} setToggleAdd={setToggleAdd} />
                {toggleAdd && (
                  <AddTodo
                    loadingBtn={loadingBtn}
                    title={title}
                    addTodo={addTodo}
                    setTitle={setTitle}
                  />
                )}
                <Search search={search} setSearch={setSearch} />
                {todos && (
                  <Todos
                    todos={todos}
                    handleDelete={handleDelete}
                    handleCompleted={handleCompleted}
                    filterTodo={filterTodo}
                  />
                )}
                {!todos && <Loader />}
                <ToastContainer />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default App;
