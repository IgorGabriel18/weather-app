import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.lg};
    justify-items: center;
`;

export const Texts = styled.div`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.xm};

    .texts__title {
        font: ${({ theme }) => theme.typography.xl};
        color: ${({ theme }) => theme.color.primary};
        text-align: center;

        .texts__title--variant {
            color: ${({ theme }) => theme.color.brand};
        }
    }

    .texts__text {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.color.secondary};
        text-align: center;

        .texts__text--variant {
            color: ${({ theme }) => theme.color.brand};
        }
    }
`;

export const Form = styled.form`
    position: relative;
    width: min(100%, 38rem);
    height: min-content;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    display: grid;
    grid-template: min-content / 1fr max-content;
    column-gap: ${({ theme }) => theme.spacing.md};
    align-items: center;
    background-color: ${({ theme }) => theme.color.tertiary};
    border-radius: ${({ theme }) => theme.border.radius};

    .form__input {
        width: 100%;
        height: min-content;
        background-color: transparent;
        border: none;
        outline: none;
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.color.secondary};
    }

    .button {
        width: max-content;
        height: min-content;
        background-color: transparent;
        border: none;
        cursor: pointer;

        .button__icon {
            font-size: ${({ theme }) => theme.icon.primary};
            color: ${({ theme }) => theme.color.brand};
        }
    }

    .form__error {
        position: absolute;
        top: calc(100% + ${({ theme }) => theme.spacing.xm});
        left: 0;
        width: 100%;
        height: min-content;
        font: ${({ theme }) => theme.typography.sm};
        color: ${({ theme }) => theme.color.error};
        text-align: center;
    }
`;
