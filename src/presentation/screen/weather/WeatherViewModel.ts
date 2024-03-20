import React, { useState } from "react"
import {ApiService, GetWeatherData} from "../../../data/service/apiService";

class WeatherState {
    readonly city: string = ""
    readonly counter: number = 0
    readonly data: GetWeatherData = {} as GetWeatherData
}

export default function WeatherViewModel( apiService: ApiService ) {
    const [ state, setState] = useState(new WeatherState())

    function onSearchTextChange(changeEvent: React.ChangeEvent<HTMLInputElement>) {
        setState((prevState) => ({
            ...prevState,
            city: changeEvent.target.value,
            counter: prevState.counter + 1
        }))
    }

    function onSearchClick() {
        (async () => {
            try {
                let data = await apiService.getWeatherData(state.city)
                setState((prevState) => ({
                    ...prevState,
                    city: prevState.city,
                    counter: prevState.counter + 100,
                    data: data
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
