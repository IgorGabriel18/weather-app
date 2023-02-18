import { yupResolver } from "@hookform/resolvers/yup";
import { MagnifyingGlass } from "phosphor-react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";

import { Container, Group } from "./styles";

interface IProps {
    search: string;
    setSearch: (value: string) => void;
}
interface IValidation {
    search: string;
}

const validationSchema = yup.object().shape({
    search: yup.string().required("Local name is required!")
});

export function SearchForm(props: IProps) {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IValidation>({
        resolver: yupResolver(validationSchema)
    });
    const handleClickSubmit: SubmitHandler<IValidation> = (data) => props.setSearch(data.search);

    return (
        <Container onSubmit={handleSubmit(handleClickSubmit)}>
            <Group>
                <input
                    className="Group__input"
                    type="search"
                    autoComplete="off"
                    {...register("search")}
                    placeholder="Local name..."
                    value={props.search}
                    onChange={(ev) => props.setSearch(ev.target.value)}
                />
                <button className="Group__button" type="submit">
                    <MagnifyingGlass className="Group__icon" />
                </button>
            </Group>
            {errors.search && <p className="Container__error">{errors.search.message}</p>}
        </Container>
    );
}
