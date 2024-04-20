import styled, { keyframes } from "styled-components";

const IMG_SIZE= '60px'

const scale_up = keyframes`
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
export const Icon = styled.img `
height: ${IMG_SIZE};
width: ${IMG_SIZE};
margin: 8px 16px;
`

export const MainIcon = styled.img`
height: ${IMG_SIZE};
width: ${IMG_SIZE};
margin: 8px 16px;
border: solid 3px rgba(0, 0, 0, 0.8);
border-radius: 50%;
animation: ${scale_up} .8s linear;
`


