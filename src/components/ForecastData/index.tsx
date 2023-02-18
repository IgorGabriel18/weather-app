import { ICurrentDay, INextHours } from "~types/globalTypes";

import { CurrentDay } from "./CurrentDay";
import { NextHours } from "./NextHours";
import { Container } from "./styles";

interface IProps {
    current_day: ICurrentDay | undefined;
    next_hours: INextHours | undefined;
}

export function ForecastData(props: IProps) {
    return (
        <Container>
            {props.current_day !== undefined && <CurrentDay {...props.current_day} />}
            {props.next_hours !== undefined && <NextHours {...props.next_hours} />}
        </Container>
    );
}
