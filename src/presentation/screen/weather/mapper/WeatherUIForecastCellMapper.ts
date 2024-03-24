import {WeatherUIDateTimeMapper} from "./WeatherUIDateTimeMapper";
import {WeatherUITemperatureMapper} from "./WeatherUITemperatureMapper";
import {WeatherUIForecastCell} from "../model/WeatherUIForecastCell";
import {WeatherForecastTimeSlotData} from "../../../../data/model/WeatherForecastData";
import {WeatherUIIconURLMapper} from "./WeatherUIIconURLMapper";

export class WeatherUIForecastCellMapper {

    private readonly timeMapper: WeatherUIDateTimeMapper
    private readonly temperatureMapper: WeatherUITemperatureMapper
    private readonly iconURLMapper: WeatherUIIconURLMapper

    constructor(
        timeMapper: WeatherUIDateTimeMapper,
        temperatureMapper: WeatherUITemperatureMapper,
        iconURLMapper: WeatherUIIconURLMapper
    ) {
        this.timeMapper = timeMapper
        this.temperatureMapper = temperatureMapper
        this.iconURLMapper = iconURLMapper
    }

    toUIForecastCell(data: WeatherForecastTimeSlotData) : WeatherUIForecastCell {
        return {
            date: this.timeMapper.toDate(data.dt),
            time: this.timeMapper.toTimeHour(data.dt),
            temperature: this.temperatureMapper.toCelsius(data.main.temp),
            icon_url: this.iconURLMapper.getIconURL(data.weather["0"].icon),
            icon_alt: data.weather[0].main,
            humidity: data.main.humidity + '%',
            feels_like: this.temperatureMapper.toCelsius(data.main.feels_like),
            details: data.weather[0].description
        } as WeatherUIForecastCell
    }
}