import styled from "styled-components";

export const Container = styled.div`
  min-height: 200px;
  width: 200px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.4);
  border-bottom-right-radius: 16px;
  position: relative;
  margin: 8px;
  background-color: orange;
  &.lightgreen {
    background-color: lightgreen;
  }
  &.cyan {
    background-color: cyan;
  }
  &.magenta {
    background-color: magenta;
  }
  button {
    right: 0;
    position: absolute;
    top: 0;
    z-index: 1;
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 200px;
  max-width: 100%;
  max-height: 100%;
  background-color: transparent;
  border: none;
  border-bottom-right-radius: 16px;
`;

export const Count = styled.div`
  position: absolute;
  bottom: 4px;
  left: 4px;
  z-index: 1;
  cursor: pointer;
`;
