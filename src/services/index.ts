import { ICurrentDay, IForecastApiResponse, INextHours, IWeatherAPIResponse } from "~types/globalTypes";
import { formattedDT } from "~utils/formatted";

import { api } from "./api";

const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeather(location: string): Promise<{
    current_day: ICurrentDay;
    next_hours: INextHours;
}> {
    const weatherData = await fetchWeatherDataApi(location);
    const forecastDataDay = await fetchForecastDataApi(location, 40);

    return {
        current_day: {
            main: {
                local: {
                    name: weatherData.name,
                    country: weatherData.sys.country
                },
                date_time: {
                    date: formattedDT(forecastDataDay.list[0].dt_txt).date,
                    time: formattedDT(forecastDataDay.list[0].dt_txt).hour
                }
            },
            weather: {
                description: weatherData.weather[0].description,
                icon: weatherData.weather[0].icon,
                temp: {
                    temp: weatherData.main.temp,
                    min: weatherData.main.temp_min,
                    max: weatherData.main.temp_max
                },
                humidity: weatherData.main.humidity,
                wind: weatherData.wind.speed,
                clouds: weatherData.clouds.all
            }
        },
        next_hours: {
            list: forecastDataDay.list.slice(0, 8).map((item) => {
                return {
                    time: formattedDT(item.dt_txt).hour,
                    icon: item.weather[0].icon,
                    temp: item.main.temp
                };
            })
        }
    };
}

export async function fetchWeatherDataApi(location: string): Promise<IWeatherAPIResponse> {
    const endpoint = `weather?q=${location}&units=metric&appid=${API_KEY}`;
    const { weather, main, wind, clouds, sys, name } = await api.get(endpoint).then((res) => res.data);

    return { weather, main, wind, clouds, sys, name };
}

export async function fetchForecastDataApi(location: string, cnt: number): Promise<IForecastApiResponse> {
    const endpoint = `forecast?q=${location}&units=metric&cnt=${cnt}&appid=${API_KEY}`;
    const { list } = await api.get(endpoint).then((res) => res.data);

    return { list };
}
