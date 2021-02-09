import { Form, InputGroup, Button } from 'react-bootstrap';

const AddTodo = ({ title, addTodo, setTitle, loadingBtn }) => {
  return (
    <>
      <Form className='mb-3' onSubmit={addTodo}>
        <InputGroup>
          <Form.Control
            size='lg'
            type='text'
            placeholder='Enter todo'
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <InputGroup.Append>
            <Button
              type='submit'
              variant='success'
              disabled={loadingBtn ? 'disabled' : ''}
            >
              {loadingBtn ? 'Loading' : 'Add'}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form>
    </>
  );
};

export default AddTodo;
