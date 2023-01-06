import { IWeather } from "@types";
import { DropHalf, MapPin, Wind } from "phosphor-react";

import { Container, Details, Id, State } from "./styles";

export function Card({ name, sys, weather, main, wind }: IWeather) {
    return (
        <Container>
            <Id>
                <MapPin className="id__icon" />
                <h1 className="id__name">{name}</h1>
                <span className="id__country">{sys.country}</span>
            </Id>
            <State>
                <img
                    src={`https://openweathermap.org/img/wn/${weather[0].icon}@4x.png`}
                    alt="Icon"
                    className="state__image"
                />
                <div className="texts">
                    <h3 className="texts__title">Its {weather[0].main}</h3>
                    <span className="texts__divider">/</span>
                    <p className="texts__text">{weather[0].description}</p>
                </div>
            </State>
            <Details>
                <p className="details__temp">{main.temp}°</p>
                <div className="card">
                    <DropHalf className="card__icon" />
                    <p className="card__text">{main.humidity}%</p>
                </div>
                <div className="card">
                    <Wind className="card__icon" />
                    <p className="card__text">{wind.speed}km/h</p>
                </div>
            </Details>
        </Container>
    );
}
