function MeteoList(props) {
    const jsx = props.weathers.map( (weather) => <WeatherItem weather={weather}/>);
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Description</th>
                        <th>Temp. act.°</th>
                        <th>Temp. res.°</th>
                        <th>Temp. min.°</th>
                        <th>Temp. max.°</th>
                    </tr>
                </thead>
                <tbody>
                    {jsx}
                </tbody>
            </table>
        </>
    );
}
export default MeteoList;

function WeatherItem(props) {
    return(
        <tr>
            <td>{props.weather.id}</td>
            <td>{props.weather.weather.map( (v) => <p key={v.id}>{v.main} - {v.description}</p>)}</td>
            <td>{props.weather.main.temp}</td>
            <td>{props.weather.main.feels_like}</td>
            <td>{props.weather.main.temp_min}</td>
            <td>{props.weather.main.temp_max}</td>
        </tr>
    );
}