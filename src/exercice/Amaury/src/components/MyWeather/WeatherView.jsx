import { useEffect, useState } from 'react';
import { Card, Image } from 'react-bootstrap';


const WeatherView = (props) => {
    const [data, setData] = useState(null);
    
    useEffect(() => {
        console.log('child');
        setData(props);
    });

    return (
        <>
        {
            data ? (
                <Card className='mt-5 shadow p-3 mb-5 bg-body rounded'>
                    <Card.Body>
                        <Card.Title>Current weather for {data.city_name} <Image alt='weather icon' rounded src={"./icons/" + data.weather.icon + ".png"}/></Card.Title>
                        <Card.Text>Temperature: {data.temp}°C</Card.Text>
                        <Card.Text>Precipitation: {data.precip ? data.precip : 0} mm</Card.Text>
                        <Card.Text>The sun rise at {data.sunrise} and set at {data.sunset}</Card.Text>
                    </Card.Body>
                </Card>) 
                : 
                (<p>loading</p>)
        }
        </>   
    )
};

export default WeatherView;