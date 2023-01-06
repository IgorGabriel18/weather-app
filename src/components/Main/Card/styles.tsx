import styled from "styled-components";

export const Container = styled.li`
    width: min(100%, 22rem);
    height: min-content;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    display: grid;
    grid-template: repeat(3, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.color.tertiary};
    border-radius: ${({ theme }) => theme.border.radius};
`;

export const Id = styled.div`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: min-content / max-content 1fr max-content;
    column-gap: ${({ theme }) => theme.spacing.sm};
    align-items: center;

    .id__icon {
        font-size: ${({ theme }) => theme.icon.secondary};
        color: ${({ theme }) => theme.color.secondary};
    }

    .id__name {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.color.secondary};
        text-align: center;
    }

    .id__country {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.color.secondary};
    }
`;

export const State = styled.section`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    justify-items: center;

    .texts {
        width: 100%;
        height: min-content;
        display: grid;
        grid-template: min-content / repeat(3, max-content);
        column-gap: ${({ theme }) => theme.spacing.xm};
        justify-content: center;
        align-items: center;

        .texts__title {
            font: ${({ theme }) => theme.typography.lg};
            color: ${({ theme }) => theme.color.primary};
        }

        .texts__divider {
            font: ${({ theme }) => theme.typography.sm};
            color: ${({ theme }) => theme.color.primary};
        }

        .texts__text {
            font: ${({ theme }) => theme.typography.md};
            color: ${({ theme }) => theme.color.secondary};
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

    .details__temp {
        width: 100%;
        height: min-content;
        font: ${({ theme }) => theme.typography.xl};
        color: ${({ theme }) => theme.color.primary};
        text-align: center;
    }

    .card {
        width: max-content;
        height: min-content;
        display: grid;
        grid-template: min-content / repeat(2, max-content);
        column-gap: ${({ theme }) => theme.spacing.xm};
        align-items: center;

        .card__icon {
            font-size: ${({ theme }) => theme.icon.secondary};
            color: ${({ theme }) => theme.color.secondary};
        }

        .card__text {
            font: ${({ theme }) => theme.typography.md};
            color: ${({ theme }) => theme.color.secondary};
            text-align: center;
        }
    }
`;
