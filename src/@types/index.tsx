import { ReactNode } from "react";

export interface IChildren {
    children: ReactNode;
}

export interface IWeather {
    weather: [
        {
            main: string;
            description: string;
            icon: string;
        },
    ];
    main: {
        temp: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    sys: {
        country: string;
    };
    id: number;
    name: string;
}
