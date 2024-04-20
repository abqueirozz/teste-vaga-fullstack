import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    gap: 4px;
    border:2px solid yellowgreen;
    width: fit-content;
    padding: 2px 6px;
    border-radius: 12px;
    background-color: whitesmoke;
    letter-spacing: .25px;
    color: white;
`

export const Text = styled.span`
    color: ${({ theme }) => theme.colors.black};
`

export const XButton = styled.button`
    background: transparent;
    border-radius:50%;
    color: gray;
    transition: all ease 1s;
`