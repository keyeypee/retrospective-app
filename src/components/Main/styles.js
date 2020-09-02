import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
