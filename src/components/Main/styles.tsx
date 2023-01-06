import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: min-content;
    display: flex;
    flex-wrap: wrap;
    gap: ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.xl};
    justify-content: center;
`;
