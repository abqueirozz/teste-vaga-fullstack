import styled from "styled-components";

export const Container = styled.div`
    width: 100%;    
    height: 100vh;
    display: flex;
    background: wheat;
    flex: 1 0 0;
    justify-content: center;
    align-items: center;
`

export const ImageIcon = styled.img`
    height: 100px;
    width: 100px;
    border: 1px solid #181818;
    border-radius: 50px;
    outline-offset: 3px;
    outline: 1px solid #181818;
    animation: pulse 2s infinite;

@keyframes pulse {
	0% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
	}

	70% {
		transform: scale(1);
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
	}

	100% {
		transform: scale(0.95);
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
	}
}


`
