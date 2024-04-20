import { ButtonHTMLAttributes, forwardRef, HTMLProps } from "react";
import * as Styled from './Button.styles'
interface ButtonProps extends HTMLProps<HTMLButtonElement> { }

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => (
    <Styled.Button ref={ref} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {props.children}
    </Styled.Button>
));