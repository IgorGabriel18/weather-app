import { IChildren } from "@types";

import { Container } from "./styles";

export function AppContainer({ children }: IChildren) {
    return <Container>{children}</Container>;
}
