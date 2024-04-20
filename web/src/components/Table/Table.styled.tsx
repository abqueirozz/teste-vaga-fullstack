import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
`

export const BadgesContainer = styled.div`
    display: inline-flex;
    width: 80%;
    flex-wrap: nowrap;
    overflow: auto;
    gap: 4px;
    padding: 8px 0;
    overflow: auto;
    color: #00000000;
    transition: color 0.3s;

    /* width */
    &::-webkit-scrollbar {
        width: 14px;
    }

    &::-webkit-scrollbar-thumb {
        background-clip: content-box;
        border: 4px solid transparent;
        border-radius: 7px;
        box-shadow: inset 0 0 0 10px;
        background-color: rgba(0,0,0,0.18);  
        transition: background-color .8s;
        
    }
    &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(0,0,0,0.58);  
    }

    &::-webkit-scrollbar-button {
        width: 0;
        height: 0;
        display: none;
    }

    &::-webkit-scrollbar-corner {
        background-color: transparent;
    }
        
`