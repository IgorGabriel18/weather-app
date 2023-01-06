import { getWeather } from "@services/index";
import { IChildren, IWeather } from "@types";
import { isExist, isNull } from "@utils/index";
import { createContext, useEffect, useState } from "react";

interface IWeatherContext {
    data: IWeather[];
    setData: (value: IWeather[]) => void;
    search: string;
    setSearch: (value: string) => void;
}

export const WeatherContext = createContext({} as IWeatherContext);

export function WeatherContextProvider({ children }: IChildren) {
    const [data, setData] = useState<IWeather[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        isExist(data, search) === false &&
            getWeather(search).then((res) => isNull(res) === false && setData([...data, res]));
    }, [search]);

    return <WeatherContext.Provider value={{ data, setData, search, setSearch }}>{children}</WeatherContext.Provider>;
}
