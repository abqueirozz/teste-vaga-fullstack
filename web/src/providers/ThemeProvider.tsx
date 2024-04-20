import { ReactNode } from "react"
import { ThemeProvider as StyledProvider } from "styled-components"

export const theme = {
    colors: {
        black: '#252525'
    }
} as const

export type themeType = typeof theme

interface ThemeProviderProps {
    children: ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
    return (<>
        <StyledProvider theme={theme}>
            {children}
        </StyledProvider>
    </>)
}