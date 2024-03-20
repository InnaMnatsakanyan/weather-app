import axios from 'axios-typescript';

export class Data {
    city: string = ""
    temp: string = ""
}

interface WeatherData {
    data: string
}

export interface GetWeatherData {
    data: WeatherData[];
}
export class ApiService {
    getWeatherData = async (city: string): Promise<GetWeatherData> => {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=` + city + `&appid=68f03e424af89025d47c695fcf0434d5`)
        console.log(response.data);
        return response.data as GetWeatherData
    }
}
