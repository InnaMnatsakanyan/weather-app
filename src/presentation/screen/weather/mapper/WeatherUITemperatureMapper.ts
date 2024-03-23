export class WeatherUITemperatureMapper {
    toCelsius(temperature: number) : string {
        return Math.floor(temperature - 273) + '°'
    }

    toFahrenheit(temperature: number) : string {
        return Math.floor(temperature - 273) * 9/5 + 32 + '°'
    }
}