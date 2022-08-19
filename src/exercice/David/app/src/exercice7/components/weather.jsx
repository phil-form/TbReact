import Search from "./search"
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherBlock from "./weather-block";
import WeatherError from "./weather-error";
import WeatherLoading from "./weather-loading";
import style from "./weather.module.css";



const apiKey = "93f4161a1b8b89c136bf93802801d58d";
const philKey = "353fa5b453c97ad69c163a1d432ea481"

const Weather = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState(null);

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [data, setData] = useState(null);

    useEffect((e) => {
        if (query === "")
            return;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${philKey}&units=metric`;

        setIsLoading(true);
        setError(null);
        setData(null);

        axios.get(url)
        .then((data) => {
            setData(data);
            console.log(data);
        })
        .catch(e => {
            console.log(e);
            setError(e);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [query])

    return (
        <>
            <div className={style.MyApp}>
                <div className={style.SearchBar}>
                    <Search onMyEvent={setQuery}/>
                </div>
                    {error ? <WeatherError error={error}/> : isLoading ? <WeatherLoading/> : <WeatherBlock data={data}/>}
            </div>
        </>
    );
}

export default Weather