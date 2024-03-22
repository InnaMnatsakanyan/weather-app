export interface WeatherCurrentData {
    coord: {
        lon: string,
        lat: string
    },
    weather: [{
        id: string,
        main: string,
        description: string,
        icon: string
    }],
    main: {
        temp: number,
        feels_like: string,
        temp_min: string,
        temp_max: string,
        pressure: string,
        humidity: string
    }
    visibility: string,
    dt: string,
    timezone: string,
    id: string,
    name: string,
    cod: string
}

export interface WeatherForecastData {
    list: WeatherForecastItem[];
}

export interface WeatherForecastItem {

}