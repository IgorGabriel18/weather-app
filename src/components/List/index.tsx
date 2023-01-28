import { useContext } from "react";

import { Card } from "./Card";
import { Container } from "./styles";
import { WeatherContext } from "#contexts/WeatherContext";

export function List() {
    const { data } = useContext(WeatherContext);

    return (
        <Container>
            {data.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </Container>
    );
}
