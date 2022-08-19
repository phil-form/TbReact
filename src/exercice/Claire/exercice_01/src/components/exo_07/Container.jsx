import { useState } from "react";
import Meteo from "./MeteoDetail";
import MeteoList from "./MeteoList";
import Search from "./Search";

function Container() {
    const [cityName, setCityName] = useState('');
    const [current, setCurrent] = useState();
    const [weathers, setWeathers] = useState([])

    function addToList() {
        setWeathers( (v) => {
            v.push(current)
            return [...v]
        })
    }

    return (
        <>
            <h2>Météo par ville</h2>
            <Search msg='' onSearch={(val) => setCityName(val)} />
            <hr></hr>
            <Meteo cityName={cityName} onChange={(data) => setCurrent(data)}/>
            <hr></hr>
            <input type="button" onClick={addToList} value="Ajouter à ma liste"></input>
            <MeteoList weathers={weathers}/>
        </>
    );
}
export default Container;