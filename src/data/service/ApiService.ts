import axios from 'axios-typescript';
import {WeatherCurrentData, WeatherForecastData} from "../model/WeatherData";
import {AxiosResponse} from "axios-typescript/dist/types";

export class ApiService {
    private static readonly baseurl = `https://api.openweathermap.org/data/2.5/`
    private static readonly apiKey = `&appid=68f03e424af89025d47c695fcf0434d5`


    getCurrentWeather = async (city: string) : Promise<WeatherCurrentData> => {
        const response: AxiosResponse = await axios.get(ApiService.baseurl + `weather?q=` + city + ApiService.apiKey)
        const data : WeatherCurrentData = JSON.parse(response.data)
        console.log(new Date(data.dt * 1000).getHours().toLocaleString() + ':' + new Date(data.dt * 1000).getMinutes().toLocaleString())
        return data
    }

    getForecastWeather = async (city: string) => {
        let response = await axios.get(ApiService.baseurl + `forecast/hourly?q=` + city + ApiService.apiKey)
        console.log(response.data);
        return response.data as WeatherForecastData
    }
}
