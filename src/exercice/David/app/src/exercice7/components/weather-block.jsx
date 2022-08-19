import style from "./weather.module.css"
const WeatherBlock = ({data}) => {
    return (
        <>
            {data ? (<>
                        <p className={style.cityName}>
                            {data.data.name}:</p><p className={style.temperature}>{data.data.main.temp.toFixed(1)}°C</p>
                    </>)
            :<p>enter a city name</p>}
        </>
    );
}

export default WeatherBlock;