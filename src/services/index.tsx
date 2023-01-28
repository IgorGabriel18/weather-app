import { api } from "./api";
import { IWeather } from "#types/globalTypes";

const API_KEY = "39912572be77171325fd75ea8afde7cc";

export async function getWeather(search: string): Promise<IWeather | null> {
    const endpoint = `weather?q=${search}&units=metric&appid=${API_KEY}`;

    try {
        const { weather, main, wind, sys, id, name } = await api.get(endpoint).then((res) => res.data);

        return { weather, main, wind, sys, id, name };
    } catch (error) {
        console.log(`getWeather ERROR: ${error}`);

        return null;
    }
}
