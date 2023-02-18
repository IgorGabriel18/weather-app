import { INextHours } from "~types/globalTypes";

import { Container, List } from "./styles";

export function NextHours(props: INextHours) {
    return (
        <Container>
            <h2 className="Container__title">Forecast in next hours</h2>
            <List>
                {props.list.map((item, index) => (
                    <li key={index} className="List__item">
                        <p className="List__time">{item.time}H</p>
                        <img src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`} alt="Icon" />
                        <h4 className="List__temp">{item.temp}°C</h4>
                    </li>
                ))}
            </List>
        </Container>
    );
}
