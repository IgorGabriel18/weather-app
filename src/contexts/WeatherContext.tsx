import { createContext, useEffect, useState } from "react";

import { getWeather } from "#services/index";
import { IChildren, IWeather } from "#types/globalTypes";
import { isExist } from "#utils/index.";

interface IWeatherContext {
    data: IWeather[];
    setSearch: (value: string) => void;
}

export const WeatherContext = createContext({} as IWeatherContext);

export function WeatherContextProvider(props: IChildren) {
    const [data, setData] = useState<IWeather[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        isExist(data, search) === false && getWeather(search).then((res) => res !== null && setData([res, ...data]));
    }, [search]);

    return <WeatherContext.Provider value={{ data, setSearch }}>{props.children}</WeatherContext.Provider>;
}
