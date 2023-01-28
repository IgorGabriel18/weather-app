import { yupResolver } from "@hookform/resolvers/yup";
import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { Button, Container, Error, Input } from "./styles";
import { WeatherContext } from "#contexts/WeatherContext";

interface IValidation {
    search: string;
}

const validationSchema = yup.object().shape({
    search: yup.string().required("Region name is required!")
});

export function Form() {
    const { setSearch } = useContext(WeatherContext);
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IValidation>({
        resolver: yupResolver(validationSchema)
    });
    const handleClickSubmit: SubmitHandler<IValidation> = (data) => setSearch(data.search);

    return (
        <Container onSubmit={handleSubmit(handleClickSubmit)}>
            <Input type="search" autoComplete="off" placeholder="Region name..." {...register("search")} />
            <Button type="submit">
                <MagnifyingGlass className="Button__icon" />
            </Button>
            {errors.search && <Error>{errors.search.message}</Error>}
        </Container>
    );
}
