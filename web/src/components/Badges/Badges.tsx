import * as Styled from './Badges.styles'

interface BadesProps {
    text: string
    onClick?: () => void
    hasX?: boolean
}

export const Badges = ({ text, onClick, hasX = false }: BadesProps) => {

    return (<>
        <Styled.Container>
            {hasX && <Styled.XButton onClick={onClick} >X</Styled.XButton>}
            <Styled.Text>{text}</Styled.Text>
        </Styled.Container>
    </>)
}