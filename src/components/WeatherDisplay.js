import '../assests/weatherDisplay.css'

const WeatherDisplay = ({ data }) => {
    // const timezoneOffset = data.timezone;
    // const utcTime = data.dt;

    // const utcDate = new Date(utcTime*1000);
    // const localTime = new Date(utcDate.getTime() + timezoneOffset*1000);
    // console.log(localTime.toLocaleString())
    console.log(data.main.temp)
    return (
        <div className='weather-container'>
            <div className='display-container'>
                <div className='weather-display'>
                    <h2>{data.name}, {data.sys.country}</h2>
                    <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt={`Weather icon depicting ${data.weather[0].description}`} />
                    <h2>{Math.round(data.main.temp)}°C &nbsp;&nbsp;&nbsp;&nbsp; {data.weather[0].description} </h2> <br />
                    <p>Humidity:{data.main.humidity}% &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Wind Speed: {data.wind.speed}m/s</p> <br />
                    {/* <p>{localTime.toLocaleString()}</p> */}
                </div>
            </div>
            <p align='center'> Made with &#x2764; by- Akash Sinha  </p>
        </div>
    )
}

export default WeatherDisplay;