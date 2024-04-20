import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  height: 60px;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(3px);
  border-radius: 2px;
  gap: 4px;
`
export const Button = styled.button`
  position: relative;
  padding: 20px 25px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  background: transparent;
  transition: .6s;
  cursor: pointer;
  border: none;

  &:hover{
    background: rgba(255, 255, 255, 0.5);
  }

   &:active{
    background: rgba(255, 255, 255, 0.8);
  }

  &:disabled{
    cursor: not-allowed;
  }
`

export const Message = styled.span`
  color: black;
  letter-spacing: 1.25;
  font-weight: 500;

`