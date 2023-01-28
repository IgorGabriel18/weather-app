import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    height: min-content;
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.xl};
    background-color: ${({ theme }) => theme.colors.main};
`;
