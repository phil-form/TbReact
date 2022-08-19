import { useEffect, useState } from "react";


const Weather = (props) => {
    const [x, setX] = useState(props);

    useEffect(() => {
        setX(props);
    }, []);

    return (
        <div className='container'>
            {x.weather[0].descritpion}
        </div>
    );
};

export default Weather;