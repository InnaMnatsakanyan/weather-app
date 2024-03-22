import WeatherViewModel from "./WeatherViewModel"
import {ApiService} from "../../../data/service/apiService";
import {WeatherUICurrentMapper} from "./mapper/WeatherUICurrentMapper";
import {WeatherDateTimeMapper} from "./mapper/WeatherDateTimeMapper";
import {WeatherTemperatureMapper} from "./mapper/WeatherTemperatureMapper";

export default function WeatherView() {
    const currentMapper = new WeatherUICurrentMapper(
        new WeatherDateTimeMapper(),
        new WeatherTemperatureMapper()
    )
    const { state, onSearchTextChange, onSearchClick } = WeatherViewModel(new ApiService(), currentMapper)
    return (
        <div>
            <input type="text" value={state.city} onChange={onSearchTextChange} />
            <button onClick={onSearchClick}>Search</button>

        </div>
    )
}
