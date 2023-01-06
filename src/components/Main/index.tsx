import { WeatherContext } from "@contexts/WeatherContext";
import { useContext } from "react";

import { Card } from "./Card";
import { Container } from "./styles";

export function Main() {
    const { data } = useContext(WeatherContext);

    return (
        <Container>
            {data.map((item) => (
                <Card key={item.id} {...item} />
            ))}
        </Container>
    );
}
