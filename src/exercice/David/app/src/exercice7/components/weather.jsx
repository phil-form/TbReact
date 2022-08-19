import Search from "./search"
import axios from "axios";
import { useEffect, useState } from "react";

const apiKey = "9c3440a5e9dcf4c4c503454b3bb8e58e";

const Weather = () => {
    const [query, setQuery] = useState("");
    const [response, setResponse] = useState({});

    useEffect((e) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${{query}}&appid=${apiKey}`
    })

    return (
        <>
            <Search onMyEvent={setQuery}/>
        </>
    );
}

export default Weather

