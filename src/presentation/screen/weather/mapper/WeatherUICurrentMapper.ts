import {WeatherCurrentData} from "../../../../data/model/WeatherData";
import {WeatherUITimeCell} from "../model/WeatherUITimeCell";
import {WeatherUIDateTimeMapper} from "./WeatherUIDateTimeMapper";
import {WeatherUITemperatureMapper} from "./WeatherUITemperatureMapper";

export class WeatherUICurrentMapper {

    private readonly dateTimeMapper: WeatherUIDateTimeMapper
    private readonly temperatureMapper: WeatherUITemperatureMapper

    constructor(
        dateTimeMapper: WeatherUIDateTimeMapper,
        temperatureMapper: WeatherUITemperatureMapper
    ) {
        this.dateTimeMapper = dateTimeMapper
        this.temperatureMapper = temperatureMapper
    }

    toUITimeCell(data: WeatherCurrentData) : WeatherUITimeCell {
        return {
            city: data.name,
            time: this.dateTimeMapper.toTime(data.dt),
            temperature: this.temperatureMapper.toCelsius(data.main.temp),
            icon_url: 'https://openweathermap.org/img/wn/' + data.weather["0"].icon + '@4x.png',
            icon_alt: data.weather["0"].main,
            humidity: data.main.humidity + '%',
            feels_like: this.temperatureMapper.toCelsius(data.main.feels_like),
            details: data.weather["0"].description,
        } as WeatherUITimeCell
    }
}