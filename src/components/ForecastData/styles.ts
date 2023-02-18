import styled from "styled-components";

export const Container = styled.section`
    width: 100%;
    height: min-content;
    display: grid;
    grid-template: repeat(3, min-content) / 100%;
    row-gap: ${({ theme }) => theme.spacing.xl};
    justify-items: center;
`;
