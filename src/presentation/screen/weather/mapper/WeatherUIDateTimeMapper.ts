export class WeatherUIDateTimeMapper {
    readonly options = {  weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
    toTime(dt_unix: number) : string {
        // @ts-ignore
        return new Date(dt_unix * 1000).toLocaleTimeString('en-us', this.options);
    }
}
