import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.xm};
    justify-items: center;

    .Container__title {
        font: ${({ theme }) => theme.typography.xl};
        color: ${({ theme }) => theme.colors.brand};
        text-align: center;
    }

    .Container__description {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
    }

    .Container__highlight {
        color: ${({ theme }) => theme.colors.brand};
    }
`;
