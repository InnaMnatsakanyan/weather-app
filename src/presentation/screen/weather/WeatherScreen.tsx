import WeatherScreenModel from "./WeatherScreenModel"
import {ApiService} from "../../../data/service/ApiService";
import {WeatherUICurrentMapper} from "./mapper/WeatherUICurrentMapper";
import {WeatherUIDateTimeMapper} from "./mapper/WeatherUIDateTimeMapper";
import {WeatherUITemperatureMapper} from "./mapper/WeatherUITemperatureMapper";
import {WeatherUIIconURLMapper} from "./mapper/WeatherUIIconURLMapper";
import WeatherCurrentCellView from "./WeatherCurrentCellView";
import SearchIcon from "./resources/searchIcon.svg";
import WeatherForecastDayCellView from "./WeatherForecastDayCellView";
import {WeatherUIForecastDayCellMapper} from "./mapper/WeatherUIForecastDayCellMapper";
import {WeatherUIForecastCellMapper} from "./mapper/WeatherUIForecastCellMapper";
import {useRef} from "react";

export default function WeatherScreen() {
    const currentMapper = new WeatherUICurrentMapper(
        new WeatherUIDateTimeMapper(),
        new WeatherUITemperatureMapper(),
        new WeatherUIIconURLMapper()
    )

    const forecastMapper = new WeatherUIForecastDayCellMapper(
        new WeatherUIDateTimeMapper(),
        new WeatherUIForecastCellMapper(
            new WeatherUIDateTimeMapper(),
            new WeatherUITemperatureMapper(),
            new WeatherUIIconURLMapper()
        )
    )

    const { state, onSearchTextChange, onSearchClick, onKeyPress } = WeatherScreenModel(new ApiService(), currentMapper, forecastMapper)
    const currentState = state.currentData
    const forecastState = state.forecastWeekData
    const myRef = useRef<null | HTMLDivElement>(null)
    const scrollToForecast = () => myRef.current?.scrollIntoView({behavior: "smooth"})

    return (
        <div className='weatherScreenStyle'>
            <div className='searchAndCurrent'>
                <div className='searchClass'>
                    <input className='cityInput' type="text" placeholder='Search for location' value={state.city}
                           onChange={onSearchTextChange}
                           onKeyDown={onKeyPress}
                    />
                    <button className='searchButton' onClick={onSearchClick}>
                        <img src={SearchIcon} height='24px' width='24px' alt=""/>
                    </button>
                </div>
                <div className='weatherAllData'>
                    {currentState ?
                        <WeatherCurrentCellView
                            city={currentState.city}
                            dateTime={currentState.dateTime}
                            temperature={currentState.temperature}
                            icon_url={currentState.icon_url}
                            icon_alt={currentState.icon_alt}
                            humidity={currentState.humidity}
                            feels_like={currentState.feels_like}
                            details={currentState.details}
                        /> : null}
                </div>
                <div className='scrollDiv'>
                    <p>Scroll down for Forecast</p>
                    <button className="scrollToForecastButton" onClick={scrollToForecast}>↓</button>
                </div>
            </div>

            <div ref={myRef} className='fullForecastWeather'>
                <h1>Forecast Weather</h1>
                {forecastState ? forecastState.map((forecast) => (
                    <WeatherForecastDayCellView
                        date={forecast.date}
                        items={forecast.items}
                    />
                )) : null}
            </div>

            <div ref={myRef} className='fullForecastWeather'>
                <h1>Forecast Weather</h1>
                {forecastState ? forecastState.map((forecast) => (
                    <WeatherForecastDayCellView
                        date={forecast.date}
                        items={forecast.items}
                    />
                )) : null}
            </div>
        </div>
    )
}
