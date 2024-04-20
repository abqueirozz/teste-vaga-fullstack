import icon from '../../assets/icon.png'
import linkedIN from '../../assets/LIN.png'


import * as Styled from './Header.styled'
export const Header = () => {
    return (
        <Styled.Container>
            <Styled.MainIcon src={icon} />
            <a target='blank' href="https://www.linkedin.com/in/arthur-queiroz-33a979136/">
                <Styled.Icon role='link' src={linkedIN} />
            </a>

        </Styled.Container>
    )
}