import styled from "styled-components";

export const Container = styled.form`
    position: relative;
    width: min(100%, 42rem);
    height: min-content;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    display: grid;
    grid-template: min-content / 1fr max-content;
    column-gap: ${({ theme }) => theme.spacing.md};
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.border.radius};
`;

export const Input = styled.input`
    width: 100%;
    height: min-content;
    min-height: 100%;
    background-color: transparent;
    border: none;
    outline: none;
    font: ${({ theme }) => theme.typography.md};
    color: ${({ theme }) => theme.colors.secondary};
`;

export const Button = styled.button`
    width: max-content;
    height: min-content;
    background-color: transparent;
    border: none;
    cursor: pointer;

    .Button__icon {
        font-size: ${({ theme }) => theme.icon.primary};
        color: ${({ theme }) => theme.colors.brand};
    }
`;

export const Error = styled.p`
    position: absolute;
    inset: calc(100% + ${({ theme }) => theme.spacing.xm}) 0 0 0;
    font: ${({ theme }) => theme.typography.sm};
    color: ${({ theme }) => theme.colors.variant.error};
    text-align: center;
`;
