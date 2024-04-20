import styled from "styled-components";
export const Container = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  width: 100%;
`

export const Input = styled.input`
  font-family: inherit;
  width: 100%;
  border: 0;
  border-bottom: 3px solid gray;
  outline: 0;
  font-size: 1rem;
  font-weight: 600;
  color: black;
  padding: 10px 0;
  background: transparent;
  transition: border 0.2s linear;
  border-image: linear-gradient(to right, blue, white);
  border-image-slice: 1;

  &:focus {
  border-image: linear-gradient(to left, blue, white);
  border-image-slice: 1;
}
`

export const Label = styled.label`
  position: absolute;
  top: 0;
  display: block;
  font-weight: 700;
  font-size: 1rem;
  color: gray;

`

