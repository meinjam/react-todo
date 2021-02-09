import { Container, Row, Col } from 'react-bootstrap';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import Search from './components/Search';
import Todos from './components/Todos';
import Firebase from './Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [loadingBtn, setLodingBtn] = useState(false);
  const [toggleAdd, setToggleAdd] = useState(false);

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
    console.log(loadingBtn);
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
    setTitle('');
  };

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
                <Search />
                <Todos />
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
