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
    row-gap: ${({ theme }) => theme.spacing.sm};

    .Texts__title {
        font: ${({ theme }) => theme.typography.xl};
        color: ${({ theme }) => theme.colors.secondary};
        text-align: center;

        .Texts__title--variant {
            color: ${({ theme }) => theme.colors.brand};
        }
    }

    .Texts__text {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.tertiary};
        text-align: center;

        .Texts__text--variant {
            color: ${({ theme }) => theme.colors.brand};
        }
    }
`;
