import React, { useState } from "react"

class WeatherState {
    readonly city: string = ""
    readonly counter: number = 0
}

export default function WeatherViewModel() {
    const [ state, setState] = useState(new WeatherState())

    function onSearchTextChange(changeEvent: React.ChangeEvent<HTMLInputElement>) {
        setState((prevState) => ({
            ...prevState,
            city: changeEvent.target.value,
            counter: prevState.counter + 1
        }))
    }

    function onSearchClick() {
        setState((prevState) => ({
            ...prevState,
            counter: prevState.counter + 100
        }))
    }

    return {
        state,
        onSearchTextChange,
        onSearchClick
    }
}
