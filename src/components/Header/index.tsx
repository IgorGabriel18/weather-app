import { Form } from "./Form";
import { Container, Texts } from "./styles";

export function Header() {
    return (
        <Container>
            <Texts>
                <h1 className="Texts__title">
                    Discover the <span className="Texts__title--variant">weather</span> in your city
                </h1>
                <p className="Texts__text">
                    Get the weather for your <span className="Texts__text--variant">region</span> anytime you want
                </p>
            </Texts>
            <Form />
        </Container>
    );
}
