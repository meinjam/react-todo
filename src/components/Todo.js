import { IoIosCheckmarkCircleOutline } from 'react-icons/io';
import { IoIosRadioButtonOff } from 'react-icons/io';
import { IoTrashOutline } from 'react-icons/io5';
import { AiOutlineEdit } from 'react-icons/ai';

const Todo = ({ todos, handleDelete, handleCompleted, filterTodo }) => {
  return (
    <div>
      {filterTodo.map((todo) => (
        <div
          key={todo.id}
          className='card d-flex justify-content-between p-3 flex-row'
        >
          <div className='left d-flex align-items-center'>
            <div className='icon mr-1'>
              {todo.completed ? (
                <IoIosCheckmarkCircleOutline
                  style={{ color: '#00b341' }}
                  onClick={() => handleCompleted(todo)}
                />
              ) : (
                <IoIosRadioButtonOff
                  style={{ color: '#ff9300' }}
                  onClick={() => handleCompleted(todo)}
                />
              )}
            </div>
            <p
              className={`mb-0 align-self-center ${
                todo.completed ? 'lin-through' : ''
              }`}
            >
              {todo.title}
            </p>
          </div>
          <div className='right d-flex'>
            {/* <AiOutlineEdit style={{ color: '#ff9300' }} /> */}
            <IoTrashOutline
              onClick={() => handleDelete(todo.id)}
              style={{ color: '#ff2825' }}
              className='ml-1'
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Todo;
