export class WeatherTemperatureMapper {
    toCelsius(temperature: number) : string {
        return Math.floor(temperature - 273) + 'C°'
    }

    toFahrenheit(temperature: number) : string {
        return Math.floor(temperature - 273) * 9/5 + 32 + 'F°'
    }
}