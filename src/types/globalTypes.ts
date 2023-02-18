import { ReactNode } from "react";

export interface IChildren {
    children: ReactNode;
}

export interface IWeatherAPIResponse {
    weather: [
        {
            main: string;
            description: string;
            icon: string;
        }
    ];
    main: {
        temp: number;
        temp_min: number;
        temp_max: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    clouds: {
        all: number;
    };
    sys: {
        country: string;
    };
    name: string;
}

export interface IForecastApiResponse {
    list: [
        {
            main: {
                temp: number;
                temp_min: number;
                temp_max: number;
            };
            weather: [
                {
                    icon: string;
                }
            ];
            dt_txt: string;
        }
    ];
}

export interface ICurrentDay {
    main: {
        local: {
            name: string;
            country: string;
        };
        date_time: {
            date: {
                dayOfWeek: string;
                day: number;
                month: string;
            };
            time: number;
        };
    };
    weather: {
        description: string;
        icon: string;
        temp: {
            temp: number;
            min: number;
            max: number;
        };
        humidity: number;
        wind: number;
        clouds: number;
    };
}

export interface INextHours {
    list: {
        time: number;
        icon: string;
        temp: number;
    }[];
}
