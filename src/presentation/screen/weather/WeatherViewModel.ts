import React, { useState } from "react"
import {ApiService} from "../../../data/service/apiService";
import {WeatherCurrentData} from "../../../data/model/WeatherData";

interface WeatherState {
    readonly city: string
    readonly data?: WeatherCurrentData
}

export default function WeatherViewModel( apiService: ApiService ) {
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
                let data = await apiService.getCurrentWeather(state.city)
                setState((prevState) => ({
                    ...prevState,
                    city: prevState.city,
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
