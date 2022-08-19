import style from "./weather.module.css"
import sun_img from "../static/sun.png";
import rain_img from "../static/rain.png";
import cloud_img from "../static/cloud.png";

const WeatherBlock = ({data}) => {

    if (!data)
        return (<>
                    <p>enter a city name</p>
                </>);
                
    const weather_widget = data.data.weather[0].main === "Clouds" ? cloud_img :
                           data.data.weather[0].main === "Clear" ?  sun_img   :
                                                                    rain_img;
    return (
        <div className={style.CurrentCity} style={{backgroundImage: `url(${weather_widget})`}}>
                <p className={style.cityName}>
                    {data.data.name}:</p><p className={style.temperature}>{data.data.main.temp.toFixed(1)}°C</p>
            </div>
        );
}

export default WeatherBlock;