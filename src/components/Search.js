import { Form, InputGroup, Button } from 'react-bootstrap';

const Search = ({ search, setSearch }) => {
  return (
    <div className='mb-3'>
      <Form>
        <Form.Control
          size='lg'
          type='text'
          placeholder='search todo... '
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
      </Form>
    </div>
  );
};

export default Search;
