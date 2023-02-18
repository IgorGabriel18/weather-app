import { Container } from "./styles";

export function Header() {
    return (
        <Container>
            <h1 className="Container__title">Weather App</h1>
            <p className="Container__description">
                Discover your local <span className="Container__highlight">weather</span>, plan your day
            </p>
        </Container>
    );
}
