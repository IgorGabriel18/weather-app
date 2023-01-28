import { Container } from "./styles";
import { IChildren } from "#types/globalTypes";

export function AppLayout(props: IChildren) {
    return <Container>{props.children}</Container>;
}
