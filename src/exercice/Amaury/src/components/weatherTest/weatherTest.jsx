import { useEffect, useState } from "react";

const WeatherTest = () => {
    const [descritpion, setDescription] = useState('');
    const [data, setData] = useState(null);

    useEffect(() => {
        const apiKey = '998d5d8f076ebeff17b0f95def3d0a4b';
        //const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},be&appid=${apiKey}`;
        const urlTest = 'https://api.openweathermap.org/data/2.5/weather?q=Brussels&appid=998d5d8f076ebeff17b0f95def3d0a4b';
        
        
        setData(null);

        fetch(urlTest)
            .then(response => response.json())
            .then(data => {
                setData(data);
                setDescription(data.weather[0].description);
            })
            .catch(error => {
                
            })
            .finally(() => {
                
            });
    }, []);

    return (
        <>
            <p>{descritpion}</p>
        </>
    )
};

export default WeatherTest