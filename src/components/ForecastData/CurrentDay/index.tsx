import { Cloud, DropHalf, Wind } from "phosphor-react";

import { ICurrentDay } from "~types/globalTypes";

import { Container, Footer, Header, Main } from "./styles";

export function CurrentDay(props: ICurrentDay) {
    return (
        <Container>
            <Header>
                <h2 className="Header__title">
                    {props.main.local.name} / {props.main.local.country}
                </h2>
                <p className="Header__text">{`${props.main.date_time.date.day}, ${props.main.date_time.date.month}, ${props.main.date_time.date.dayOfWeek}`}</p>
            </Header>
            <Main>
                <div className="Main__box">
                    <p className="Main__temp">{props.weather.temp.temp}°C</p>
                    <p className="Main__desc">{props.weather.description}</p>
                </div>
                <img
                    className="Main__img"
                    src={`https://openweathermap.org/img/wn/${props.weather.icon}@4x.png`}
                    alt="Icon"
                />
            </Main>
            <Footer>
                <div className="Footer_box">
                    <Wind className="Footer_icon" />
                    <h5 className="Footer_title">{props.weather.wind}km/h</h5>
                    <p className="Footer_text">Wind</p>
                </div>
                <div className="Footer_box">
                    <DropHalf className="Footer_icon" />
                    <h5 className="Footer_title">{props.weather.humidity}%</h5>
                    <p className="Footer_text">Humidity</p>
                </div>
                <div className="Footer_box">
                    <Cloud className="Footer_icon" />
                    <h5 className="Footer_title">{props.weather.clouds}%</h5>
                    <p className="Footer_text">Clouds</p>
                </div>
            </Footer>
        </Container>
    );
}
