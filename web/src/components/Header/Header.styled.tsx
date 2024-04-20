import styled, { keyframes } from "styled-components";

const translocate = keyframes`
  from {
    transform: scale(0);
  }

  to {
    transform: scale(1);
  }
`;

export const Container = styled.div`
display: inline-flex;
width: 100%;
max-height: 100px;
min-height: auto;
background: rgba(255, 255, 255,.1);
box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.3);
gap: 8px;
justify-content: space-between;

`

export const Icon = styled.img`
height: 60px;
width: 60px;
border: solid 3px rgba(0, 0, 0, 0.8);
border-radius: 50%;
animation: ${translocate} .8s linear;
`

export const Link = styled.a `
height: 60px;
width: 60px;
`

