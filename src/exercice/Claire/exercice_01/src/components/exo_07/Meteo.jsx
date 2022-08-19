import {useEffect, useState} from "react";
import axios from "axios";

function Meteo ({ cityName }) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect(
        () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=30ef736344995364186c0077d15422fd`;

            if(cityName) {
                setIsLoading(true);
                setError(null);
                setData(null);

                const timerId = setTimeout(() => {

                    axios.get(url)
                    .then(({ data }) =>
                    {
                        setData({
                            weather: data.weather,
                            main: data.main
                        });
                    })
                    .catch(e => setError(e.error))
                    .finally(() => setIsLoading(false));
                }, 1000);
                    
                return () => clearTimeout(timerId);
                
            }
        },
    [cityName]);

    return (
        <div className="m-0">
            {isLoading ? (
                <p>Loading ...</p>
            ) : error ? <p>ERROR : {error}</p>  :
                data ?
                <>
                    <h5>Expected weather</h5>
                    {
                        data.weather.map( (w) => <p key={w.id}>{w.main}: {w.description}</p> )
                    }
                    <h5>Temperatures: </h5>
                    <ul>
                        <li>Actuelle: {data.main.temperature}</li>
                        <li>Ressentie: {data.main.feels_like}</li>
                        <li>Minimum: {data.main.temp_min}</li>
                        <li>Maximum {data.main.temp_max}</li>
                    </ul>
                </> 
                : 
                <p>Vous devez entrer un nom de ville!</p> }
        </div>
    );
}

export default Meteo;
