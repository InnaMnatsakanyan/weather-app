export class WeatherUIDateTimeMapper {
    readonly dateTimeOptions: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false };
    readonly dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: '2-digit', hour: undefined };
    readonly timeOptions: Intl.DateTimeFormatOptions = { hour: 'numeric', hour12: true };

    toDateTime(dt_unix: number) : string {
        return new Date(dt_unix * 1000).toLocaleTimeString('en-us', this.dateTimeOptions);
    }

    toDate(dt_unix: number) : string {
        return new Date(dt_unix * 1000).toLocaleDateString('en-us',  this.dateOptions);
    }

    toTimeHour(dt_unix: number) : string {
        return new Date(dt_unix * 1000).toLocaleTimeString('en-us',  this.timeOptions);
    }
}
