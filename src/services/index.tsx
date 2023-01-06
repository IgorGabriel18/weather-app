import { api } from "./api";

const apiKey = "39912572be77171325fd75ea8afde7cc";

export async function getWeather(search: string) {
    try {
        const endpoint = `weather?q=${search}&units=metric&appid=${apiKey}`;
        const { data } = await api.get(endpoint);

        return data;
    } catch (error) {
        console.log(error);

        return null;
    }
}
