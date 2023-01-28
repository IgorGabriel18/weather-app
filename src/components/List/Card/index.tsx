import { DropHalf, MapPin, Wind } from "phosphor-react";

import { Container, Id, State, Details } from "./styles";
import { IWeather } from "#types/globalTypes";

export function Card(props: IWeather) {
    return (
        <Container>
            <Id>
                <MapPin className="Id__icon" />
                <h1 className="Id__name">{props.name}</h1>
                <span className="Id__country">{props.sys.country}</span>
            </Id>
            <State>
                <img src={`https://openweathermap.org/img/wn/${props.weather[0].icon}@4x.png`} alt="Icon" />
                <div className="State__info">
                    <h3 className="State__title">Its {props.weather[0].main}</h3>
                    <span className="State__divider">/</span>
                    <p className="State__text">{props.weather[0].description}</p>
                </div>
            </State>
            <Details>
                <p className="Details__temp">{props.main.temp}°</p>
                <div className="Details__card">
                    <DropHalf className="Details__icon" />
                    <p className="Details__text">{props.main.humidity}%</p>
                </div>
                <div className="Details__card">
                    <Wind className="Details__icon" />
                    <p className="Details__text">{props.wind.speed}km/h</p>
                </div>
            </Details>
        </Container>
    );
}
