export function toCelsius(temp: number) : number {
    return Math.floor(temp - 273)
}

export function toFahrenheit(temp: number) : number {
    return Math.floor(toCelsius(temp) * (9 / 5) + 32)
}
