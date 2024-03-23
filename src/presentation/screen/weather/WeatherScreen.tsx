import WeatherScreenModel from "./WeatherScreenModel"
import {ApiService} from "../../../data/service/ApiService";
import {WeatherUICurrentMapper} from "./mapper/WeatherUICurrentMapper";
import {WeatherUIDateTimeMapper} from "./mapper/WeatherUIDateTimeMapper";
import {WeatherUITemperatureMapper} from "./mapper/WeatherUITemperatureMapper";
import WeatherCellView from "./WeatherCellView";
import SearchIcon from "./resources/searchIcon.svg";

export default function WeatherScreen() {
    const currentMapper = new WeatherUICurrentMapper(
        new WeatherUIDateTimeMapper(),
        new WeatherUITemperatureMapper()
    )
    const { state, onSearchTextChange, onSearchClick } = WeatherScreenModel(new ApiService(), currentMapper)
    const currentState = state.currentData
    return (
        <div className='weatherScreenStyle'>
            <div className='searchClass'>
                <input className='cityInput' type="text" placeholder='Search for location' value={state.city}
                       onChange={onSearchTextChange}/>
                <button className='searchButton' onClick={onSearchClick}>
                    <img src={SearchIcon} height='24px' width='24px' alt=""/>
                </button>
            </div>
            <div className='weatherAllData'>
                {currentState ?
                    <WeatherCellView
                        city={currentState.city}
                        time={currentState.time}
                        temperature={currentState.temperature}
                        icon_url={currentState.icon_url}
                        icon_alt={currentState.icon_alt}
                        humidity={currentState.humidity}
                        feels_like={currentState.feels_like}
                        details={currentState.details}
                    /> : null
                }
            </div>
        </div>
    )
}
