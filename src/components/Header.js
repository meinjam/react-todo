import { DiReact } from 'react-icons/di';
import { Button } from 'react-bootstrap';

const Header = ({ toggleAdd, setToggleAdd }) => {
  return (
    <div className='header d-flex justify-content-between mb-3'>
      <h4 className='align-self-center font-weight-bold mb-0'>
        <DiReact className='react-logo' />
        Todo App
      </h4>
      <button
        className='btn align-self-center text-white'
        style={
          toggleAdd ? { background: '#f31507' } : { background: '#28a745' }
        }
        onClick={() => {
          setToggleAdd(!toggleAdd);
        }}
      >
        {toggleAdd ? 'close' : 'Add Todo'}
      </button>
    </div>
  );
};

export default Header;
