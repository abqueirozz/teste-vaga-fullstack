import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 24px;
  height: 44px;
  border-radius: 5px;
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  position: relative;
  border: 2px solid blue;
  color: black;
  background: transparent;

  &:focus {
    outline: solid 2px black;
    outline-offset: 3px;
  }
    &:hover {
      outline: solid 2px;
      outline-offset: 3px;
    }
    &:active {
      background: #9fafefec;
    }
`