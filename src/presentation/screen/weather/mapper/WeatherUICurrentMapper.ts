import {WeatherCurrentData} from "../../../../data/model/WeatherCurrentData";
import {WeatherUITimeCell} from "../model/WeatherUITimeCell";
import {WeatherUIDateTimeMapper} from "./WeatherUIDateTimeMapper";
import {WeatherUITemperatureMapper} from "./WeatherUITemperatureMapper";
import {WeatherUIIconURLMapper} from "./WeatherUIIconURLMapper";

export class WeatherUICurrentMapper {

    private readonly dateTimeMapper: WeatherUIDateTimeMapper
    private readonly temperatureMapper: WeatherUITemperatureMapper
    private readonly iconURLMapper: WeatherUIIconURLMapper

    constructor(
        dateTimeMapper: WeatherUIDateTimeMapper,
        temperatureMapper: WeatherUITemperatureMapper,
        iconURLMapper: WeatherUIIconURLMapper
    ) {
        this.dateTimeMapper = dateTimeMapper
        this.temperatureMapper = temperatureMapper
        this.iconURLMapper = iconURLMapper
    }

    toUITimeCell(data: WeatherCurrentData) : WeatherUITimeCell {
        return {
            city: data.name,
            dateTime: this.dateTimeMapper.toDateTime(data.dt),
            temperature: this.temperatureMapper.toCelsius(data.main.temp),
            icon_url: this.iconURLMapper.getIconURL(data.weather["0"].icon),
            icon_alt: data.weather["0"].main,
            humidity: data.main.humidity + '%',
            feels_like: this.temperatureMapper.toCelsius(data.main.feels_like),
            details: data.weather["0"].description,
        } as WeatherUITimeCell
    }
}