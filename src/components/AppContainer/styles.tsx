import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: fit-content;
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
    display: grid;
    grid-template: repeat(2, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.xl};
    justify-items: center;
    background-color: ${({ theme }) => theme.color.main};
`;
