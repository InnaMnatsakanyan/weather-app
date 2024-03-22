import axios from 'axios-typescript';
import {WeatherCurrentData, WeatherForecastData} from "../model/WeatherData";
import {AxiosResponse} from "axios-typescript/dist/types";

export class ApiService {

    getCurrentWeather = async (city: string) : Promise<WeatherCurrentData> => {
        const response: AxiosResponse = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=` + city + `&appid=68f03e424af89025d47c695fcf0434d5`);
        const data : WeatherCurrentData = JSON.parse(response.data)
        console.log(data.main.temp - 273.15)
        return data
    }

    getForecastWeather = async (city: string) => {
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=` + city + `&appid=68f03e424af89025d47c695fcf0434d5`)
        console.log(response.data);
        return response.data as WeatherForecastData
    }
}
