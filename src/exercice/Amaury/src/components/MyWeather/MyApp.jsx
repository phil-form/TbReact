import { useState } from "react";
import { Button, Form } from 'react-bootstrap';
import WeatherView from "./WeatherView";


const MyApp = () => {
    const [search, setSearch] = useState('');
    const [data, setData] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        let apiKey = 'f9e06965e39d48f28cb454ac36c37966';
        let url = `https://api.weatherbit.io/v2.0/current?city=${search}&key=${apiKey}`;

        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = () => {
            if (xhttp.readyState == 4 && xhttp.status == 200) {
                let response = JSON.parse(xhttp.responseText);
                setData(response.data[0]);
                console.log(response.data[0]);
            }
            else {
                console.log(xhttp.readyState + ': error wit status ' + xhttp.status);
            };
        };
        xhttp.open("GET", url, true);
        xhttp.send();
    };

    return (
        <div className="container mt-5">
            <Form>
                <Form.Control
                className="shadow p-3 mb-5 bg-body rounded"
                    type="text" 
                    placeholder="city"
                    onChange={(e) => {setSearch(e.target.value)}}
                />
                <Button
                    className="mt-3 shadow p-3 mb-5"
                    variant="primary"
                    type="submit"
                    onClick={handleSubmit}
                >
                    Search
                </Button>
            </Form>
            <div>
                {
                    data ? (<WeatherView {...data} />) : 'choose a city'
                }
            </div>
        </div>
    );
};

export default MyApp;