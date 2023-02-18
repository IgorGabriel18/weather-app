import { IChildren } from "~types/globalTypes";

import { Container } from "./styles";

export function AppLayout(props: IChildren) {
    return <Container>{props.children}</Container>;
}
