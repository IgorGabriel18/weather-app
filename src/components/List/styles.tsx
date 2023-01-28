import styled from "styled-components";

export const Container = styled.ul`
    width: 100%;
    height: min-content;
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
    justify-content: center;
`;
