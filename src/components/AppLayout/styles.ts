import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: min-content;
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
    display: flex;
    flex-direction: column;
    row-gap: ${({ theme }) => theme.spacing.lg};
    background-color: ${({ theme }) => theme.colors.main};
`;
