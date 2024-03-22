export class WeatherDateTimeMapper {
    toTime(dt_unix: number) : string {
        let date = new Date(dt_unix * 1000)
        return date.getTime().toLocaleString() + ':' + date.getMinutes().toLocaleString()
    }
}
