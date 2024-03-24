import './WeatherScreenStyle.css'
import {WeatherUIForecastDayCell} from "./model/WeatherUIForecastDayCell";

export default function WeatherForecastDayCellView(current: WeatherUIForecastDayCell) {
    return (
        <div className='weatherForecastData'>
            <p>{current.date}</p>
            <div className='dayCells'>
                {current.items.map(item =>
                    <div className='forecastCell'>
                        <div className='forecastTopPart'>
                            <div className='forecastTopTimeAndIcon'>
                                <h3>{item.time}</h3>
                                <img className='forecastIcon' src={item.icon_url} alt={item.icon_alt}/>
                            </div>
                            <div className='forecastDegreeAndDetails'>
                                <h3>{item.temperature}</h3>
                                <p>{item.icon_alt}</p>
                            </div>
                        </div>

                        <div className='forecastDetails'>
                            <p className='forecastDetailsHum'>H: {item.humidity}</p>
                            <p className='forecastDetailsFeels'>Feels like: {item.feels_like}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}