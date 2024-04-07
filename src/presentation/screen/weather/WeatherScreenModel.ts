import React, {useState} from "react"
import {ApiService} from "../../../data/service/ApiService";
import {WeatherUITimeCell} from "./model/WeatherUITimeCell";
import {WeatherUICurrentMapper} from "./mapper/WeatherUICurrentMapper";
import {WeatherUIForecastDayCell} from "./model/WeatherUIForecastDayCell";
import {WeatherUIForecastDayCellMapper} from "./mapper/WeatherUIForecastDayCellMapper";

interface WeatherState {
    readonly city: string
    readonly currentData?: WeatherUITimeCell
    readonly forecastWeekData?: WeatherUIForecastDayCell[]
}

export default function WeatherScreenModel(
    apiService: ApiService,
    uiCurrentMapper: WeatherUICurrentMapper,
    uiForecastDayMapper: WeatherUIForecastDayCellMapper

) {
    const [ state, setState] = useState<WeatherState>({
        city: ""
    })

    function onSearchTextChange(changeEvent: React.ChangeEvent<HTMLInputElement>) {
        setState((prevState) => ({
            ...prevState,
            city: changeEvent.target.value
        }))
    }

    function onSearchClick() {
        (async () => {
            try {
                let currentDataPromise = apiService.getCurrentWeather(state.city)
                let forecastDataPromise = apiService.getForecastWeather(state.city)
                let currentDats = await currentDataPromise
                let forecastData = await forecastDataPromise
                setState((prevState) => ({
                    ...prevState,
                    city: prevState.city,
                    currentData: uiCurrentMapper.toUITimeCell(currentDats),
                    forecastWeekData: uiForecastDayMapper.toUIForecastDayCell(forecastData)
                }))
            } catch (e) {
                console.error()
            }
        })();
    }

    const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) =>{
        if( e.key === 'Enter' ){
            onSearchClick();
        }
    };

    return {
        state,
        onSearchTextChange,
        onSearchClick,
        onKeyPress
    }
}
