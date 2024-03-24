import {WeatherUITimeCell} from "./model/WeatherUITimeCell";
import './WeatherScreenStyle.css'

export default function WeatherCurrentCellView(current: WeatherUITimeCell) {
    return (
        <div className='weatherCellStyle'>
            <div className='weather_top'>
                <div className='flexCell'>
                    <h1>{current.city}</h1>
                    <p>{current.dateTime}</p>
                    <img src={current.icon_url} alt={current.icon_alt}/>
                </div>
                <div className='temperatureAndMessage'>
                    <h1>{current.temperature}</h1>
                    <p>{current.icon_alt}</p>
                </div>
            </div>

            <div className='currentDetails'>
                <p>H: {current.humidity}</p>
                <p>Feels like: {current.feels_like}</p>
                <p>{current.details}</p>
            </div>
        </div>
    )
}