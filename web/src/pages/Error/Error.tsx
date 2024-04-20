import img from "../../assets/error.png"
import * as Styled from './Error.styles'
export function Error() {
    return (
        <Styled.Container>
            <Styled.Image src={img} alt="error logo" />
            <Styled.Header>TIVEMOS UM PERCALÇO</Styled.Header>
            <Styled.Message className="message">Nossa equipe está trabalhando para resolver o mais rápido possivel.</Styled.Message>
        </Styled.Container>
    )
}