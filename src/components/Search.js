import { Form, InputGroup, Button } from 'react-bootstrap';

const Search = () => {
  return (
    <div>
      <Form>
        <Form.Control size='lg' type='text' placeholder='search todo... ' />
      </Form>
    </div>
  );
};

export default Search;
