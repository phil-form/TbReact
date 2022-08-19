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
                    <Card.Header className='bg-light'><h1>{data.city_name}</h1></Card.Header>
                    <Card.Body>
                        <Card.Title>{data.weather.description} <Image alt='weather icon' rounded src={"./icons/" + data.weather.icon + ".png"}/></Card.Title>
                        <Card.Text>Temperature: {data.temp}°C</Card.Text>
                        <Card.Text>Precipitation: {data.precip ? data.precip : 0} mm</Card.Text>
                        <Card.Text>Wind: {data.wind_spd ? data.wind_spd.toFixed(1) : 0} m/s direction {data.wind_cdir_full}</Card.Text>
                        <Card.Text>Humidity: {data.rh ? data.rh : 0} %</Card.Text>
                        <Card.Text>The sun rise at {data.sunrise} and set at {data.sunset}</Card.Text>
                    </Card.Body>
                    <Card.Footer className="text-muted bg-light">Last update: {data.ob_time}</Card.Footer>
                </Card>) 
                : 
                (<p>loading</p>)
        }
        </>   
    )
};

export default WeatherView;