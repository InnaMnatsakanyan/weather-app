import {WeatherUIForecastCell} from "./WeatherUIForecastCell";

export interface WeatherUIForecastDayCell {
    readonly date: string,
    readonly items: WeatherUIForecastCell[]
}
