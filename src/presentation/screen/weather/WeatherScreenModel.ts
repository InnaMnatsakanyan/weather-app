import React, { useState } from "react"
import {ApiService} from "../../../data/service/ApiService";
import {WeatherUITimeCell} from "./model/WeatherUITimeCell";
import {WeatherUICurrentMapper} from "./mapper/WeatherUICurrentMapper";

interface WeatherState {
    readonly city: string
    readonly currentData?: WeatherUITimeCell
}

export default function WeatherScreenModel(
    apiService: ApiService,
    uiCurrentMapper: WeatherUICurrentMapper
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
                let currentData = await apiService.getCurrentWeather(state.city)
                setState((prevState) => ({
                    ...prevState,
                    city: prevState.city,
                    currentData: uiCurrentMapper.toUITimeCell(currentData),
                }))
            } catch (e) {
                console.error()
            }
        })();
    }

    return {
        state,
        onSearchTextChange,
        onSearchClick
    }
}
