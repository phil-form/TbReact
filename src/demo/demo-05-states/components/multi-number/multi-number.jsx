import {useState} from "react";

const MultiNumber = ({ multiplier }) =>
{
    const [nb, setNb] = useState(1);

    const handleMulti = () =>
    {
        setNb(nb => nb * multiplier);
    }

    const handleReset = () =>
    {
        setNb(nb => 1);
    }

    return (
        <>
            <h3>Multiplication par {multiplier} (function)</h3>
            <div>
                <p>Valeur : {nb} </p>
                <button onClick={handleMulti}>x {multiplier}</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </>
    );
}

MultiNumber.defaultProps = {
    multiplier: 2
};

export default MultiNumber;
