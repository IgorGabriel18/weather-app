import styled from "styled-components";

export const Container = styled.form`
    width: 100%;
    height: min-content;
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spacing.xm};
    align-items: center;

    .Container__error {
        font: ${({ theme }) => theme.typography.sm};
        color: ${({ theme }) => theme.colors.variant.error};
        text-align: center;
    }
`;

export const Group = styled.div`
    width: min(100%, 32rem);
    height: min-content;
    padding: ${({ theme }) => theme.spacing.xm} ${({ theme }) => theme.spacing.lg};
    display: grid;
    grid-template: min-content / 1fr max-content;
    column-gap: ${({ theme }) => theme.spacing.md};
    align-items: center;
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: ${({ theme }) => theme.border.radius};

    .Group__input {
        width: 100%;
        height: min-content;
        background-color: transparent;
        border: none;
        outline: none;
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.primary};
    }

    .Group__button {
        width: max-content;
        height: min-content;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .Group__icon {
        font-size: ${({ theme }) => theme.icon.primary};
        color: ${({ theme }) => theme.colors.brand};
    }
`;
