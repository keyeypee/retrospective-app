import styled from "styled-components";

export const Container = styled.div`
  width: 50%;
  padding: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  margin-top: 32px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Title = styled.h3`
  text-align: center;
  button {
    margin-left: 16px;
  }
`;

export const Button = styled.button``;

export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
