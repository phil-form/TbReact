import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';


const Search = (props) => {
    const [searchValue, setSearchValue] = useState('');

    const {msg, onSearch} = props;

    const handleSubmit = (e) => {
        e.preventDefault();

        onSearch(searchValue);
    };

    return (
        <div className='container'>
            <Form>
                <Form.Group>
                    <Form.Control 
                        type='text' 
                        placeholder={msg}
                        onChange={(e) => {setSearchValue(e.target.value)}}
                    />
                </Form.Group>
                <Button 
                    variant='primary'
                    type='submit'
                    onClick={handleSubmit}
                >
                    Search
                </Button>
            </Form>
        </div>
    );
};

export default Search;