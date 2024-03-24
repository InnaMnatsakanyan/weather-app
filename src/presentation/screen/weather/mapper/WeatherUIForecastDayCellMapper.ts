import {WeatherUIDateTimeMapper} from "./WeatherUIDateTimeMapper";
import {WeatherUIForecastDayCell} from "../model/WeatherUIForecastDayCell";
import {WeatherForecastData} from "../../../../data/model/WeatherForecastData";
import {WeatherUIForecastCellMapper} from "./WeatherUIForecastCellMapper";
import {WeatherUIForecastCell} from "../model/WeatherUIForecastCell";

export class WeatherUIForecastDayCellMapper {

    private readonly dateTimeMapper: WeatherUIDateTimeMapper
    private readonly forecastCellMapper: WeatherUIForecastCellMapper

    constructor(
        dateTimeMapper: WeatherUIDateTimeMapper,
        forecastCellMapper: WeatherUIForecastCellMapper
    ) {
        this.dateTimeMapper = dateTimeMapper
        this.forecastCellMapper = forecastCellMapper
    }

    toUIForecastDayCell(data: WeatherForecastData) : WeatherUIForecastDayCell[] {
        let result: WeatherUIForecastDayCell[] = []
        let currentCells: WeatherUIForecastCell[] = []
        let previousItemDate: string | null = null;
        data.list.forEach((forecastTimeSlotData, index) => {
            let itemDate: string = this.dateTimeMapper.toDate(forecastTimeSlotData.dt)
            if (previousItemDate == null) {
                previousItemDate = itemDate
            }
            if (itemDate !== previousItemDate || index === data.list.length - 1) {
                let dayCell: WeatherUIForecastDayCell = {
                    date: previousItemDate,
                    items: currentCells
                }
                result.push(dayCell)
                currentCells = []
            }
            currentCells.push(this.forecastCellMapper.toUIForecastCell(forecastTimeSlotData))
            previousItemDate = itemDate
        })
        return result
    }
}
