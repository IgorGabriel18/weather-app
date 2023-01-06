import { IWeather } from "@types";

export const isExist = (data: IWeather[], search: string) =>
    data.some((item) => item.name.toLowerCase() === search.toLowerCase());

export const isNull = (data: IWeather | null) => (data === null ? true : false);
