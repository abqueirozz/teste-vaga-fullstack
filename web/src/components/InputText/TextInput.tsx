import { forwardRef, HTMLProps } from "react";
import * as Styled from './TextInput.styles'
interface TextInputProps extends HTMLProps<HTMLInputElement> {
    text: string
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(({ text, ...rest }, ref) => (
    <Styled.Container>
        <Styled.Input ref={ref} {...rest} />
        <Styled.Label>{text} </Styled.Label>
    </Styled.Container>
));