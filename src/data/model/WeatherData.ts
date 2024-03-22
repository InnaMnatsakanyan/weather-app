export interface WeatherCurrentData {
    readonly coord: {
        readonly lon: string,
        readonly lat: string
    },
    readonly weather: [{
        readonly id: string,
        readonly main: string,
        readonly description: string,
        readonly icon: string
    }],
    readonly main: {
        readonly temp: number,
        readonly feels_like: number,
        readonly temp_min: string,
        readonly temp_max: string,
        readonly pressure: string,
        readonly humidity: string
    }
    readonly visibility: string,
    readonly dt: number, //unix
    readonly timezone: string,
    readonly id: string,
    readonly name: string,
    readonly cod: string
}

export interface WeatherForecastData {
    list: WeatherForecastItem[];
}

export interface WeatherForecastItem {

}