import WeatherViewModel from "./WeatherViewModel"

export default function WeatherView() {
    const { state, onSearchTextChange, onSearchClick } = WeatherViewModel()
    return (
        <div>
            <input type="text" value={state.city} onChange={onSearchTextChange} />
            <button onClick={onSearchClick}>Search</button>
            <p>Current value: {state.counter}</p>
        </div>
    )
}
