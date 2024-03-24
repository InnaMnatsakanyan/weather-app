export class WeatherUIIconURLMapper {
    private static readonly baseurl = `https://openweathermap.org/img/wn/`

    getIconURL(code: string) : string {
        return WeatherUIIconURLMapper.baseurl + code + '@4x.png'
    }
}