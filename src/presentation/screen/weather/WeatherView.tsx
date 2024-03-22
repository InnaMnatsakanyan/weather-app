import WeatherViewModel from "./WeatherViewModel"
import {ApiService} from "../../../data/service/apiService";

export default function WeatherView() {
    const { state, onSearchTextChange, onSearchClick } = WeatherViewModel(new ApiService())
    return (
        <div>
            <input type="text" value={state.city} onChange={onSearchTextChange} />
            <button onClick={onSearchClick}>Search</button>
        </div>
    )
}
