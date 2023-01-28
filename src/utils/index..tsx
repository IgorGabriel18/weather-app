import { IWeather } from "#types/globalTypes";

export const isExist = (value: IWeather[], search: string) =>
    value.some((item) => item.name.toLowerCase() === search.toLowerCase());
