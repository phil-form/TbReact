import { useState } from "react";
import Meteo from "./Meteo";
import Search from "./Search";

function Container() {
    const [cityName, setCityName] = useState('');
    return (
        <>
            <h1>Météo par ville</h1>
            <Search msg='' onSearch={(val) => setCityName(val)} />
            <hr></hr>
            <Meteo cityName={cityName} />
        </>
    );
}
export default Container;