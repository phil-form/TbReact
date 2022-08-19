import { useEffect, useState } from 'react';
import ErrorScreen from './errorScreen';
import LoadingScreen from './loadingScreen';
import Weather from './weather';


const WeatherApp = ({city}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
        const apiKey = '998d5d8f076ebeff17b0f95def3d0a4b';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},be&appid=${apiKey}`;
        const urlTest = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=998d5d8f076ebeff17b0f95def3d0a4b';
        
        setIsLoading(true);
        setError(null);
        setData(null);

        fetch(urlTest)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, []);

    return (
        <div className='container'>
            {isLoading ? 
                (<LoadingScreen />) : error ? 
                    (<ErrorScreen {...error} />) : data ? 
                        (<Weather {...data} />) : 'Enter a city'}
        </div>
    );
};

export default WeatherApp;