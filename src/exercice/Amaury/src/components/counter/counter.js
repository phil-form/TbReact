import { useState } from 'react';
import Button from 'react-bootstrap/Button';


const Counter = ({incrementValue}) => {
    const [value, setValue] = useState(0);

    const handleReset = () => {
        setValue(0);
    };

    const handleIncrement = () => {
        setValue(value + incrementValue);
    };

    return (
        <>
            <p>{value}</p>
            <Button variant='primary' onClick={handleIncrement}>Increment</Button>
            <Button variant='light' onClick={handleReset}>Reset</Button>
        </>
    );
};

export default Counter;