import axios from 'axios-typescript';
import {WeatherCurrentData} from "../model/WeatherCurrentData";
import {AxiosResponse} from "axios-typescript/dist/types";
import {WeatherForecastData} from "../model/WeatherForecastData";

export class ApiService {
    private static readonly baseurl = `https://api.openweathermap.org/data/2.5/`
    private static readonly apiKey = `&appid=68f03e424af89025d47c695fcf0434d5`


    getCurrentWeather = async (city: string) : Promise<WeatherCurrentData> => {
        const response: AxiosResponse = await axios.get(ApiService.baseurl + `weather?q=` + city + ApiService.apiKey)
        return JSON.parse(response.data)
    }

    getForecastWeather = async (city: string) : Promise<WeatherForecastData> => {
        let response: AxiosResponse = await axios.get(ApiService.baseurl + `forecast?q=` + city + ApiService.apiKey)
        return JSON.parse(response.data)
    }
}
