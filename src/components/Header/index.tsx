import { WeatherContext } from "@contexts/WeatherContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { MagnifyingGlass } from "phosphor-react";
import { useContext } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { Container, Texts, Form } from "./styles";

interface ISearch {
    search: string;
}

export function Header() {
    const validationSchema = yup.object().shape({
        search: yup.string().required("Location name is required!"),
    });
    const { setSearch } = useContext(WeatherContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ISearch>({
        resolver: yupResolver(validationSchema),
    });
    const handleClickSubmit: SubmitHandler<ISearch> = (data) => setSearch(data.search);

    return (
        <Container>
            <Texts>
                <h1 className="texts__title">
                    Discover the <span className="texts__title--variant">weather</span> in your city
                </h1>
                <p className="texts__text">
                    Get the weather for your <span className="texts__text--variant">region</span> anytime you want
                </p>
            </Texts>
            <Form onSubmit={handleSubmit(handleClickSubmit)}>
                <input
                    type="search"
                    autoComplete="off"
                    placeholder="Location name..."
                    {...register("search")}
                    className="form__input"
                />
                <button type="submit" data-testid="button" className="button">
                    <MagnifyingGlass className="button__icon" />
                </button>
                {errors.search && (
                    <p data-testid="form__error" className="form__error">
                        {errors.search.message}
                    </p>
                )}
            </Form>
        </Container>
    );
}
