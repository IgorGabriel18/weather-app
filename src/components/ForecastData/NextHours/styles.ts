import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.md};

    .Container__title {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.primary};
    }
`;

export const List = styled.ul`
    width: 100%;
    height: min-content;
    display: flex;
    gap: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.md};
    overflow-x: scroll;

    .List__item {
        width: max-content;
        height: min-content;
        padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
        display: grid;
        grid-template: repeat(3, min-content) / 100%;
        row-gap: ${({ theme }) => theme.spacing.xm};
        justify-items: center;
        background-color: ${({ theme }) => theme.colors.tertiary};
        border-radius: ${({ theme }) => theme.border.radius};
    }

    .List__time {
        font: ${({ theme }) => theme.typography.sm};
        color: ${({ theme }) => theme.colors.primary};
    }

    .List__temp {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.primary};
    }

    @media screen and (min-width: ${({ theme }) => theme.screen.breakpoint}) {
        flex-wrap: wrap;
        justify-content: center;
        overflow-x: auto;
    }
`;
