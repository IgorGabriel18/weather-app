import styled from "styled-components";

export const Container = styled.li`
    width: min(100%, 18rem);
    height: min-content;
    padding: ${({ theme }) => theme.spacing.lg};
    display: grid;
    grid-template: repeat(3, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.xm};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.border.radius};
`;

export const Id = styled.div`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: min-content / max-content 1fr max-content;
    column-gap: ${({ theme }) => theme.spacing.sm};
    align-items: center;

    .Id__icon {
        font-size: ${({ theme }) => theme.icon.secondary};
        color: ${({ theme }) => theme.colors.tertiary};
    }

    .Id__name {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.tertiary};
        text-align: center;
    }

    .Id__country {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.tertiary};
    }
`;

export const State = styled.section`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    justify-items: center;

    .State__info {
        width: 100%;
        height: min-content;
        display: grid;
        grid-template: min-content / repeat(3, max-content);
        column-gap: ${({ theme }) => theme.spacing.xm};
        justify-content: center;
        align-items: center;

        .State__title {
            font: ${({ theme }) => theme.typography.lg};
            color: ${({ theme }) => theme.colors.secondary};
        }

        .State__divider {
            font: ${({ theme }) => theme.typography.sm};
            color: ${({ theme }) => theme.colors.secondary};
        }

        .State__text {
            font: ${({ theme }) => theme.typography.md};
            color: ${({ theme }) => theme.colors.tertiary};
        }
    }
`;

export const Details = styled.section`
    width: 100%;
    height: min-content;
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.xm} ${({ theme }) => theme.spacing.md};
    justify-content: space-evenly;

    .Details__temp {
        width: 100%;
        height: min-content;
        font: ${({ theme }) => theme.typography.xl};
        color: ${({ theme }) => theme.colors.secondary};
        text-align: center;
    }

    .Details__card {
        width: max-content;
        height: min-content;
        display: grid;
        grid-template: min-content / repeat(2, max-content);
        column-gap: ${({ theme }) => theme.spacing.xm};
        align-items: center;

        .Details__icon {
            font-size: ${({ theme }) => theme.icon.secondary};
            color: ${({ theme }) => theme.colors.secondary};
        }

        .Details__text {
            font: ${({ theme }) => theme.typography.md};
            color: ${({ theme }) => theme.colors.secondary};
            text-align: center;
        }
    }
`;
