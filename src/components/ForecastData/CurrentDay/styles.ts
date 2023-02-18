import styled from "styled-components";

export const Container = styled.section`
    width: min(100%, 26rem);
    height: min-content;
    display: grid;
    grid-template: repeat(3, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.xm};
`;

export const Header = styled.header`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: repeat(2, min-content) / 100%;

    .Header__title {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.primary};
    }

    .Header__text {
        font: ${({ theme }) => theme.typography.sm};
        color: ${({ theme }) => theme.colors.secondary};
    }
`;

export const Main = styled.main`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: min-content / repeat(2, 1fr);
    column-gap: ${({ theme }) => theme.spacing.xm};
    align-items: center;

    .Main__box {
        width: 100%;
        height: min-content;
        display: grid;
        grid-template: repeat(2, min-content) / 100%;
        row-gap: ${({ theme }) => theme.spacing.sm};
    }

    .Main__temp {
        font: ${({ theme }) => theme.typography.lg};
        color: ${({ theme }) => theme.colors.primary};
        text-align: center;
    }

    .Main__desc {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.secondary};
        text-align: center;
    }
`;

export const Footer = styled.footer`
    width: 100%;
    height: min-content;
    padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
    display: grid;
    grid-template: min-content / repeat(3, 1fr);
    column-gap: ${({ theme }) => theme.spacing.sm};
    justify-items: center;
    background-color: ${({ theme }) => theme.colors.tertiary};
    border-radius: ${({ theme }) => theme.border.radius};

    .Footer_minmax {
        width: 100%;
        height: min-content;
    }

    .Footer_box {
        width: max-content;
        height: min-content;
        display: grid;
        grid-template: repeat(3, min-content) / 100%;
        row-gap: ${({ theme }) => theme.spacing.xm};
        justify-items: center;
    }

    .Footer_icon {
        font-size: ${({ theme }) => theme.icon.secondary};
        color: ${({ theme }) => theme.colors.brand};
    }

    .Footer_title {
        font: ${({ theme }) => theme.typography.md};
        color: ${({ theme }) => theme.colors.primary};
    }

    .Footer_text {
        font: ${({ theme }) => theme.typography.sm};
        color: ${({ theme }) => theme.colors.secondary};
    }
`;
