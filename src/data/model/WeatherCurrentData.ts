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
        readonly pressure: string,
        readonly humidity: string
    }
    readonly dt: number, //unix
    readonly name: string,
}
