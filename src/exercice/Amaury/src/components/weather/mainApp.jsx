import {useState} from "react";
import Search from "./search";
import WeatherApp from "./weatherApp";

const MainApp = () =>
{
    const [city, setCity] = useState('');

    return (
        <>
            <Search msg='your city' onSearch={(val) => setCity(val)} />
            <WeatherApp city={city} />
        </>
    );
}

export default MainApp;