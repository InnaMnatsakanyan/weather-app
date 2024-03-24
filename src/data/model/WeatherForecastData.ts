export interface WeatherForecastTimeSlotData {
    readonly weather: [{
        readonly id: string,
        readonly main: string,
        readonly description: string,
        readonly icon: string
    }],
    readonly main: {
        readonly temp: number,
        readonly feels_like: number,
        readonly pressure: string,
        readonly humidity: string
    }
    readonly dt: number, //unix
    readonly dt_txt: string,
    readonly name: string
}

export interface WeatherForecastData {
    readonly list: WeatherForecastTimeSlotData[]
}