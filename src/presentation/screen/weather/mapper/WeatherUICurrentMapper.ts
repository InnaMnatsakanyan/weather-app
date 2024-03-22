import {WeatherCurrentData} from "../../../../data/model/WeatherData";
import {WeatherUITimeCell} from "../model/WeatherUITimeCell";
import {WeatherDateTimeMapper} from "./WeatherDateTimeMapper";
import {WeatherTemperatureMapper} from "./WeatherTemperatureMapper";

export class WeatherUICurrentMapper {

    private readonly dateTimeMapper: WeatherDateTimeMapper
    private readonly temperatureMapper: WeatherTemperatureMapper

    constructor(
        dateTimeMapper: WeatherDateTimeMapper,
        temperatureMapper: WeatherTemperatureMapper
    ) {
        this.dateTimeMapper = dateTimeMapper
        this.temperatureMapper = temperatureMapper
    }

    toUITimeCell(data: WeatherCurrentData) : WeatherUITimeCell {
        return {
            time: this.dateTimeMapper.toTime(data.dt),
            temperature: this.temperatureMapper.toCelsius(data.main.temp),
            icon_url: 'https://openweathermap.org/img/wn/' + data.weather["0"].icon + '@2x.png',
            icon_alt: data.weather["0"].main,
            humidity: data.main.humidity + '%',
            feels_like: this.temperatureMapper.toCelsius(data.main.feels_like),
            details: data.weather["0"].description,
        } as WeatherUITimeCell
    }
}