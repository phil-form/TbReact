const WeatherError = ({error}) => {
    return  (
        <>
            <p>{error.response.data.message}</p>
        </>
    );
}

export default WeatherError